import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  constructor(private readonly http: HttpClient) {}

  fetchAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>('/profiles');
  }

  fetchOne(profileId: number): Observable<any> {
    return this.http.get(`/profiles/${profileId}`);
  }
}
