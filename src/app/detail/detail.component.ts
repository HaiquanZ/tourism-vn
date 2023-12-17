import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface TripDay {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  data: any;
  id: any;
  formattedData: TripDay[] = [];
  isLoading: boolean = true;

  constructor(
    private Srv: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.isLoading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.Srv.getById(this.id, (res: any) => {
      console.log(res);
      this.data = res;
      this.handleTourDes(res.tour_des);
      this.isLoading = false;
    })
  }

  handleNavigation(id: any){
    this.router.navigate([`/detail/${id}`]);
    this.loadData();
  }

  handleTourDes(tourDes: any){
    const days: string[] = tourDes.split(/\n\n\n\nNGÀY \d+ \| /).slice(1);
    for (const day of days) {
      const [title, detail] = day.split('\n\n\n\n');
      this.formattedData.push({ title: title.trim(), detail: detail.trim() });
    }
  }
}
