import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  pageNumber = 1;
  getPhotos() {
    return this.http.get<photo[]>(
      'https://api.unsplash.com/users/mechatron/photos/?client_id=Rw2tXE7Xiv6sNWrETq9dk5z1KhjL4tsFpGLNTZI6-i4',
      {
        params: {
          per_page: 30,
          page: this.pageNumber,
          stats: true,
        },
      }

      // 'https://api.pexels.com/v1/collections/all-zpm8ium/?client_id=8EnwaPFWzy1doEoPzv32zThj75T2TaKhsmvT5u7wp61U5n8fQlt8ZNGe',
      // {
      //   params:{
      //     per_page:100
      //   }
      // }
    );
  }

  stats() {
    return this.http.get<stat>(
      'https://api.unsplash.com/users/mechatron/statistics?client_id=Rw2tXE7Xiv6sNWrETq9dk5z1KhjL4tsFpGLNTZI6-i4'
    );
  }

  getBest() {
    return this.http.get<photo[]>(
      'https://api.unsplash.com/collections/9309783/photos/?client_id=Rw2tXE7Xiv6sNWrETq9dk5z1KhjL4tsFpGLNTZI6-i4',
      {
        params: {
          per_page: 50,
        },
      }
    );
  }

  getPexels() {
    return this.http.get('https://api.pexels.com/v1/collections/', {
      headers: {
        Authorization:
          '8EnwaPFWzy1doEoPzv32zThj75T2TaKhsmvT5u7wp61U5n8fQlt8ZNGe',
      },
      params: {
        id: 'all-zpm8ium',
        type: 'photos',
      },
    });
  }
}
export interface photo {
  id: string;
  description: string;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: {
    total_photos: number;
  };
}
export interface stat {
  downloads: {
    total: number;
  };
  views: {
    total: number;
  };
}
