import {
  Component,
  
  OnInit,
 
  
} from '@angular/core';
import { PhotosService, stat } from '../service/photos.service';
import { photo } from '../service/photos.service';
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faUnsplash,
} from '@fortawesome/free-brands-svg-icons';


import {
  faClose,
  faEnvelope,
  faExpand,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
 
  
})
export class GallaryComponent implements OnInit {
  showButton:boolean = false;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faPinterest = faPinterest;
  faInstagram = faInstagram;
  faBehance = faBehance;
  faFullscreen = faExpand;
  faClose = faClose;
  faUnsplash = faUnsplash;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;

  stats!: stat;
  totalViews!: number;
  loader = true;
  isLoaded = false;

  closeResult = '';

  
  constructor(private photosService: PhotosService,
    private activatedRoute:ActivatedRoute) {}

  photos$ = this.photosService.getPhotos();
  dataimg: photo[] = [];

  photos: photo[]=[];
  totalPhotos!: number;
  photosPerPage!: number;

  ngOnInit(): void {
    // this.photosService.testing().subscribe(
    //   (data) => {console.log(data);
    //   }
    // )
    /* *********** */
  
   this.photos$.subscribe(
    
      data=>{
        this.dataimg = data;
        // console.log(data);

        // console.log(this.photos[0].user.total_photos);

        this.totalPhotos = this.dataimg[0].user.total_photos;
        this.photosPerPage = this.dataimg.length;
      }
    
   )
    // this.photosService.getPhotos().subscribe(
    //   (data) => {
    //     this.dataimg = data;
    //     // console.log(data);

    //     // console.log(this.photos[0].user.total_photos);

    //     this.totalPhotos = this.dataimg[0].user.total_photos;
    //     this.photosPerPage = this.dataimg.length;
    //   },
    //   (error) => {
    //     // console.log(error);
    //   }
    // );

    this.photosService.stats().subscribe((data) => {
      this.stats = data;

      this.totalViews = this.stats.views.total;
    });

    window.onscroll = ()=>{
      // console.log('scrolled');
      
    this.scrollFunction();
    };
  
    
  }
  
   

  screenSize!: number;

  previousPage() {
    if (this.photosService.pageNumber > 1) {
      this.photosService.pageNumber--;

      this.photosPerPage -= this.dataimg.length;
      this.photosService.getPhotos().subscribe(
        (data) => {
          this.dataimg = data;

          this.isLoaded = true;
        },
        (error) => {
          console.log(error);
        }
      );

      this.screenSize = window.innerWidth;
      if (this.screenSize > 750) {
        window.scrollTo({
          top: 2790,
          // left: 950,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: 3550,
          // left: 500,
          behavior: 'smooth',
        });
      }
    }
  }

  nextPage() {
    if (this.photosPerPage! < this.totalPhotos) {
      this.photosService.pageNumber++;
      this.photosService.getPhotos().subscribe(
        (data) => {
          this.dataimg = data;

          // console.log(data);
          this.photosPerPage += this.dataimg.length;
          // console.log('photos length:', this.photos.length);
          // console.log('page number:', this.photosService.pageNumber);
          // console.log('total:', this.photosPerPage);

          this.isLoaded = true;
        },
        (error) => {
          console.log(error);
        }
      );

      this.screenSize = window.innerWidth;
      if (this.screenSize > 750) {
        window.scrollTo({
          top: 2790,
          // left: 950,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: 3550,
          // left: 500,
          behavior: 'smooth',
        });
      }
    }
  }

  scrollFunction() {
    if (
   
    document.documentElement.scrollTop > 2850
    ) {
      // console.log(document.documentElement.scrollTop );
      
    this.showButton = true;
    } else {
      this.showButton = false;
    }
    }
   
}
