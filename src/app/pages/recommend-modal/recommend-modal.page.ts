import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FollowService } from 'src/app/services/follow.service';


@Component({
  selector: 'app-recommend-modal',
  templateUrl: './recommend-modal.page.html',
  styleUrls: ['./recommend-modal.page.scss'],
})
export class RecommendModalPage implements OnInit {

  @Input() coreMovieDetails;

  inUserFollowingArrObj;
  selectedRating = 0;
  inputtedMessage: string = '';
  readonly = false;
  currentUser = {} as User;
  followingSub: any;

  constructor(private modalCtr: ModalController, public followService: FollowService, public auth: AuthService,

  ) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  async ionViewWillEnter() {
    this.currentUser = await this.auth.getUser();
    let followingArr = [];

    // retrieves the following count for a user's profile
    this.followingSub = this.followService.getFollowing(this.currentUser.uid).valueChanges()
      .subscribe(following => {
        followingArr = Object.keys(following);
        console.log("THis is the folloiwngArr in recommedn", followingArr)
        this.inUserFollowingArrObj = this.followService.getUserList(followingArr);
      },
        async (err) => {
          console.log("This user has no following", err.message);
        })
  }

  ngOnDestroy() {
    this.followingSub.unsubscribe()
  }

}
