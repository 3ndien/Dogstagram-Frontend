import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../profile/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private getAllPath = environment.apiUrl + '/post/getallfiles';
  private profileDetailsPath = environment.apiUrl + '/profile/details';
  private uploadProfilePicturePath =
    environment.apiUrl + '/profile/updateporofilepicture';
  private editProfileDetailsPath = environment.apiUrl + '/profile/edit';
  private profilPicInSource = new Subject();
  currProfPicture = this.profilPicInSource.asObservable();

  constructor(private http: HttpClient) {}

  checkProfilPicture(): string | null {
    this.profilPicInSource.next(localStorage.getItem('profile-pic'));
    return localStorage.getItem('profile-pic');
  }

  getAllFiles(): Observable<any> {
    return this.http.get(this.getAllPath, {
      observe: 'body',
      responseType: 'json',
    });
  }

  getProfileDetails(): Observable<IPost> {
    return this.http.get<IPost>(this.profileDetailsPath);
  }

  setProfilePicture(data: any): Observable<any> {
    return this.http.post(this.uploadProfilePicturePath, data, {
      observe: 'body',
      responseType: 'text',
    });
  }

  editProfileDetails(data: any): Observable<any> {
    return this.http.post(this.editProfileDetailsPath, data);
  }
}
