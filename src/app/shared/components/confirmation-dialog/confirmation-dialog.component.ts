import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {
  message: string   = "Você deseja realmente excluir este item?"
  confirmButtonText = "Confirmar"
  cancelButtonText  = "Cancelar"

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {
    if(_data){
      this.message = _data.message || this.message;
      if (_data.buttonText) {
        this.confirmButtonText = _data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText  = _data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
