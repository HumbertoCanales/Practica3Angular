import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/animations';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [ fade ]
})
export class PhotosComponent implements OnInit {

  arrPhotos: any[] = [];

  constructor(private photosService: PhotosService ) { }

  ngOnInit(): void {
    this.photosService.getAll()
    .then(photos => this.arrPhotos = photos)
    .catch(error => console.log(error));
  }

}
