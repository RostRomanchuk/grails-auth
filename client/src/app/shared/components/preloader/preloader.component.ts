import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { PreloaderService } from '../../services';
@Component({
  selector: 'preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: PreloaderService){ }
}
