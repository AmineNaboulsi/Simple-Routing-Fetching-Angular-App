import { Component , OnInit} from '@angular/core';
import { ApiService, User } from '../core/services/api.service';
import { NgFor,NgIf } from '@angular/common';

@Component({  
  selector: 'app-data-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent implements OnInit {
  public users: User[] = [];
  isLoading = false;
  error: string | null = null;
  // private apiService = Inject(ApiService);
  constructor(private apiService : ApiService){
      this.isLoading = true;
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data: User[] ) =>{
        console.log({
          data : data
        })
        this.users = data;
          this.isLoading = false;
      },
      error: (error: string) => {
        console.error('Error fetching users:', error);
        this.error = 'Failed to load users. Please try again later.';
        this.isLoading = false;
      }
    }
  )
  }
  
}
