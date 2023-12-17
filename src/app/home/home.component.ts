import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_DATA_ITEM, MOCK_DATA_ITEM2 } from '../constant/mockData.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ){}

  lisItem = MOCK_DATA_ITEM;
  listItem2 = MOCK_DATA_ITEM2;

  list = [1,2,3,4];
  sliders = [
    {title: 'Du lịch ngay cùng thầy Luyện', img: 'https://images.vietnamtourism.gov.vn/vn/images/2020/Thang_9/trang_an1.jpg'},
    {title: 'Du lịch ngay cùng thầy Quân', img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/28/1234680/Thoi-Tiet.jpeg'},
    {title: 'Du lịch ngay cùng thầy Minh', img: 'https://image.tinnhanhchungkhoan.vn/1200x630/Uploaded/2023/bpikpjik/2023_06_14/da-nang-5-8014.jpg'},
    {title: 'Du lịch ngay cùng thầy Ban', img: 'https://images.vietnamtourism.gov.vn/vn/images/2020/Thang_9/_DSC3768.JPG'},
    {title: 'Du lịch ngay cùng bạn Khiêm', img: 'https://wecheckin.vn/wp-content/uploads/2017/09/19956184_1381094211945444_8593348861747378752_o.jpg'}
  ]

  handleNavigation(id: any){
    this.router.navigate([`/detail/${id}`]);
  }
}
