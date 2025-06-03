import { Component } from '@angular/core';
import { faCloudArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  faCloudArrowUp = faCloudArrowUp;
  faTrash = faTrash;

  file: File | null = null;
selectedFile: any;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.file = input.files[0];
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.file = event.dataTransfer.files[0];
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  removeFile() {
    this.file = null;
  }

  onSubmit() {
    if (!this.file) return;

    // Aqui você pode integrar com uma API usando FormData
    console.log('Arquivo enviado:', this.file.name);
    alert(`Arquivo "${this.file.name}" enviado com sucesso!`);

    this.file = null;
  }

  get fileName(): string | null {
    return this.file ? this.file.name : null;
  }

}
