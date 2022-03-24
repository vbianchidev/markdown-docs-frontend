import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Doc } from 'src/app/core/interfaces/docs.interface';

import { DocsService } from '../../services/docs.service';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-pages-table',
  templateUrl: './pages-table.component.html',
  styleUrls: ['./pages-table.component.scss']
})
export class DocsTableComponent implements OnInit {
  dataSource: Observable<Doc[]>;
  
  displayedColumns: string[] = [
    "_id", "title", "slug", "createdAt", "updatedAt"
  ];

  constructor(
    public docsService: DocsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.dataSource = this.docsService.getAll();
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data:{
        message: 'Você deseja realmente excluir este item?',
        buttonText: {
          ok: 'Confirmar',
          cancel: 'Cancelar'
        }
      }
    });

    dialogRef.afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.onDelete(id);
          this.refresh();
          this.snackBar.open('Registro Excluido!', 'Fechar', {
            duration: 2000,
          });
        }
      });
  }

  onDelete(id: string): void {
    this.docsService.delete(id);
  }
}
