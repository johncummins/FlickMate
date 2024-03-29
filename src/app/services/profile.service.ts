import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private afStore: AngularFirestore,) { }

  getProfileContent(userId: string, category: string) {
    let categoryRef = this.afStore.collection(`users/`).doc(`${userId}`).collection('profileContent').doc(`${category}`);
    return categoryRef.snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            const data = doc.payload.data().items;
            return data;
          }
          else {
            return console.error("Doc doesnt exist");
          }
        },
          async (err) => {
            console.log("Heres the error: ", err.message);
          })
      );
  }


  // posts content to the specified users 'profileContent' section on Firestore
  writeProfileContent(userId: string, category: string, movieDetails) {
    console.log("THis is the id in the profileservice:", userId);
    console.log("THis is the movie Object in the profileservice:", movieDetails);

    // const docRef = await this.afs.collection('chats').add(data);
    let profileContentRef = this.afStore.collection(`users/`).doc(`${userId}`)
      .collection('profileContent').doc(`${category}`);

    if (movieDetails) {
      const movieData = {
        movieId: movieDetails.movieID,
        moviePoster: movieDetails.posterPath,
        movieTitle: movieDetails.title,
        movieYear: movieDetails.releaseDate.slice(0, 4),
        createdAt: Date.now()
      };
      console.log("THis is the movieData obj:", movieData);
      return profileContentRef.set({
        items: firebase.firestore.FieldValue.arrayUnion(movieData)
      },
        { merge: true });
    }
  }

  updateTop10List(userId: string, newArray) {
    console.log("THis is the newarray in the profileservice:", newArray);

    let profileContentRef = this.afStore.collection(`users/`).doc(`${userId}`)
      .collection('profileContent').doc('top10');

    return profileContentRef.set({
      items: newArray
    });
  }


  getRecommendations(inputtedUser, currentUser) {
    if (inputtedUser !== currentUser) {
      let recRef = this.afStore.collection('ratings').doc(`${inputtedUser}`).collection('sentTo').doc(`${currentUser}`)
      return recRef.snapshotChanges()
        .pipe(
          map(doc => {
            if (doc.payload.exists) {
              const data = doc.payload.data().ratingsArr;
              data.totalRatingDiff = doc.payload.data().totalRatingDiff;;
              return data;
              // return { id: doc.payload.id, ...doc.payload.data() };
            }
            else {
              return console.error("Doc doesnt exist");
            }

          },
            async (err) => {
              console.log("Heres the error: ", err.message);
            })
        );
    }

  }


  getTotalRatingDiff(inputtedUser, currentUser) {
    if (inputtedUser !== currentUser) {
      let recRef = this.afStore.collection('ratings').doc(`${inputtedUser}`).collection('sentTo').doc(`${currentUser}`);
      return recRef.snapshotChanges()
        .pipe(
          map(doc => {
            if (doc.payload.exists) {
              const totalRatingDiff = doc.payload.data().totalRatingDiff;
              return totalRatingDiff;
            }
            else {
              return console.error("Doc doesnt exist");
            }
          },
            async (err) => {
              console.log("Heres the error: ", err.message);
            })
        );
    }
  }

  // used to retieve the rating diff for all relevant users the current user follows
  getCombinedRatingDiff(currentUser) {
    if (currentUser) {
      let ratingsRef = this.afStore.collection('ratingDifferences').doc(`${currentUser}`).collection('for');
      return ratingsRef.snapshotChanges()
        .pipe(
          map(collections => {
            let userList = [];
            if (collections) {
              console.log("Collection Data: ", collections);
              collections.forEach((doc) => {
                console.log("Each doc Data: ", doc.payload.doc.data());
                userList.push(doc.payload.doc.data());
              })
            }
            else {
              return console.error("Doc doesnt exist");
            }
            console.log("USerList: ", userList)
            return userList;
          },
            async (err) => {
              console.log("Heres the error: ", err.message);
            })
        );
    }
  }
}

