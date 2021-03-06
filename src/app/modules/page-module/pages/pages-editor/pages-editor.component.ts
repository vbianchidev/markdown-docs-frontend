import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Page } from 'src/app/modules/page-module/interfaces/page.interface';

import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-pages-editor',
  templateUrl: './pages-editor.component.html',
  styleUrls: ['./pages-editor.component.scss']
})
export class DocsEditorComponent {
  content: string = "";

  options: any = {  
    showPreviewPanel: true,
    showBorder: false,
    hideIcons: ['FullScreen'],
    usingFontAwesome5: true,
    scrollPastEnd: 0,
    enablePreviewContentClick: true,
    resizable: false
  }

  docsForm = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required]
  });

  constructor(
    private router: Router,
    private docsService: PageService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  onSubmit(): void {
    if (!this.docsForm.valid) return;

    const doc: Page = {
      title: this.docsForm.controls['title'].value,
      content: this.docsForm.controls['content'].value
    };

    this.docsService.create(doc).subscribe((response) => {
      this.snackBar.open(`Página ${response.title} criado!`, 'Fechar', {
        duration: 3000
      });

      this.router.navigate(['/docs']);
    });
  }
}
