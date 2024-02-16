import { Component } from '@angular/core';
import { GithubService } from './services/github-service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'git-user-search';
  searchLoginName: string;
  userImage: string;
  userName: string;

  constructor(private githubService: GithubService) {
    this.searchLoginName = '';
    this.userImage = '';
    this.userName = '';
  }

  searchUsers() {
    if (this.searchLoginName) {
      this.githubService.searchUsers(this.searchLoginName)
        .subscribe((data: any) => {
          this.setUserDetails(data);
        });
    }

  }
  onInputChange(event: any) {
    this.searchLoginName = event.target.value;
  }
  setUserDetails(data: any) {
    this.userImage = data.avatar_url;
    this.userName = data.name;
  }
}
