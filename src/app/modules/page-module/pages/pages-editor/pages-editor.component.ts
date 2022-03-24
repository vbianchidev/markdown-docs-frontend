import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Doc } from 'src/app/core/interfaces/docs.interface';

import { DocsService } from '../../services/docs.service';


@Component({
  selector: 'app-pages-editor',
  templateUrl: './pages-editor.component.html',
  styleUrls: ['./pages-editor.component.scss']
})
export class DocsEditorComponent {
  docsForm = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required]
  });

  constructor(
    private router: Router,
    private docsService: DocsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  onSubmit(): void {
    if(!this.docsForm.valid) return;
    
    const doc: Doc = {
      title: this.docsForm.controls['title'].value,
      content: this.docsForm.controls['content'].value,
    }
    
    this.docsService.create(doc)
      .subscribe(response => { 
        this.snackBar.open(`Página ${response.title} criado!`, 'Fechar', {
          duration: 3000,
        });

        this.router.navigate(['/docs']);
      });
  }
}
