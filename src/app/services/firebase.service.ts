import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  getDocs,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private skillsCollection = collection(this.firestore, `Skills`);
  constructor(private firestore: Firestore) {}

  async listSkills() {
    let data: any[] = [];
    (
      await getDocs(query(this.skillsCollection, orderBy('value', 'asc')))
    ).forEach((docs: any) => {
      data.push(docs.data());
    });
    return data;
  }
}
