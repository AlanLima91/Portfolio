import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  repositoryList: any = null;

  constructor(private githubApi: GithubApiService) { }

  ngOnInit(): void {
    this.githubApi.getTest().subscribe(data => {
      console.log(data);
      this.repositoryList = data;
      if (this.repositoryList) {
        this.beautify();
      }
    });
  }

  beautify(): void {
    this.repositoryList.map(repository => {
      repository.name = repository.name.replace(/_/gi, ' ');
      repository.created_at = repository.created_at.replace(/T.*/gi, '');
    });
  }
}
