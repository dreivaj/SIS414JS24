import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class NuevoComponent {
  title: string = '';
  url: string = '';

  constructor(private firestore: Firestore, private toastr: ToastrService) {}

  async addVideo() {
    try {
      const videosCollection = collection(this.firestore, 'videos');
      await addDoc(videosCollection, {
        title: this.title,
        url: this.url
      });
      this.toastr.success('Video añadido exitosamente');
      this.title = '';
      this.url = '';
    } catch (error) {
      console.error(error);
      this.toastr.error('Error al añadir el video');
    }
  }
}