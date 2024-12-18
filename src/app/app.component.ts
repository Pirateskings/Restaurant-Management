import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthserviceService } from './Authservice/authservice.service';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,NgIf,FormsModule,CommonModule,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Resturant-Manage';

  newsletter={ 
    myemail :''
   };
  
   
   private http = inject(HttpClient);
   private elementRef =inject(ElementRef);

   isLoginPage: boolean = false;

  constructor(public router: Router, private activatedRoute: ActivatedRoute,private auth:AuthserviceService) {
   
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
    
  }

   onsubmit(): void { 
    if(!this.newsletter.myemail){
      alert("please enter the email");
      return;
    }
    this.http.post("http://localhost:8080/api/newseltter", this.newsletter).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Subscription Successfully");
        this.newsletter.myemail='';
        return;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        if(error.status === 500){
          alert("Duplicate Entry");
        }
        alert("An Error Occurred, Please try again");
      }
    });
  }
  Onlogout() {
           
     this.auth.logout();
  }
  


  //for search bar
  searchQuery: string = '';
  isSearchActive: boolean = false;
  filteredResults: any[] = [];
  menuItems = [
    {
      name: 'Bruschetta',
      price:'Price', 
      amt :'-10',
      image:'https://th.bing.com/th/id/R.a7d9403986c-1206e013e05ed698-12b25?rik=zl%2ffleBDE%2bTPBg&riu=http%3a%2f%2fimg.sndimg.com%2ffood%2fimage%2fupload%2fq_92%2cfl_progressive%2fv1%2fimg%2frecipes%2f22%2f55%2f71%2f222x87iSNegy7GYCYxxU_pesto-bruschetta-6690.jpg&ehk=suzcFh5w%2bKLjvOJqeXmieEQhnMJEGjJsl7%2bsFbNbq18%3d&risl=&pid=ImgRaw&r=0',
      name1: 'Gnoochi',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://www.tasteandtellblog.com/wp-content/uploads/2014/11/Gnocchi-with-Meat-Sauce-Taste-and-Tell-1-374x561.jpg',
      name2: 'Tequila',
      price2:'Price', 
      amt2 :'-5',
      image2:'/pexels-marceloverfe-29570811.jpg',
      ingredients: [
        { name: 'Tomatoes', quantity: '2 pcs' },
        { name: 'Basil', quantity: '5 leaves' },
        { name: 'Olive Oil', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '1 clove' },
        { name: 'Balsamic Vinegar', quantity: '1 tsp' }
      ],
    },
    {
      name: 'Spanish Sauage',
      price:'Price', 
      amt :'-12',
      image: 'https://th.bing.com/th/id/R.3bd5e659b94860dea7f3a2cef908a5ae?rik=mAV8a3JuoiezZg&riu=http%3a%2f%2fdigtoknow.com%2fwp-content%2fuploads%2f2015%2f09%2fStarter-Recipes.jpg&ehk=25DvV%2b7OL%2bX0flyyfA%2flqU4LpEUT2C%2bIbogbiCH3w8s%3d&risl=&pid=ImgRaw&r=0',
      name1: 'Sauteed Pork',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://assets.marthastewart.com/styles/wmax-520-highdpi/d20/la102308_1006_mainv1/la102308_1006_mainv1_vert.jpg?itok=YP5sM4Bu',
      name2: 'Cocktail',
      price2:'Price', 
      amt2 :'-5',
      image2:'https://thegoosedarien.com/wp-content/uploads/2021/12/Wide-3-2-Happy-Hour.jpg',
      ingredients: [
        { name: 'Pork', quantity: '200g' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Olive Oil', quantity: '2 tbsp' },
        { name: 'Salt', quantity: '1 pinch' }
      ],   },
    {
      name: 'Black Tea with Parotta',
      price:'Price', 
      amt :'-12',
      image: '/pexels-saveurssecretes-8859972.jpg',
      name1: 'Roasted Bacon',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://th.bing.com/th/id/OIP.UVoXh3r31oNPFIq-CCyAxwAAAA?rs=1&pid=ImgDetMain',
      name2: 'Forzen Dirnks',
      price2:'Price', 
      amt2 :'-5',
      image2:'/pexels-luice-666315472-18821234.jpg',
      ingredients: [
        { name: 'Carrots', quantity: '2 pcs' },
        { name: 'Celery', quantity: '1 stalk' },
        { name: 'Onions', quantity: '1 pc' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Tomatoes', quantity: '3 pcs' }
      ],
    },
    {
      name: 'Aloo Nazakat',
      price:'Price', 
      amt :'-12',
      image: 'https://i.pinimg.com/originals/09/10/08/0910082bd4a206a8f23da1059954c651.jpg',
      name1: 'Vegan Dinner',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://assets.epicurious.com/photos/5c7d6ee0d6c37575ccdd79c3/master/pass/SMALL-PLATES-Chickpea-Flatbread-recipe-27022019.jpg',
      name2: 'Ice Coffee',
      price2:'Price', 
      amt2 :'-5',
      image2:'/pexels-ekrulila-2615323.jpg',
      ingredients: [
        { name: 'Potatoes', quantity: '3 pcs' },
        { name: 'Yogurt', quantity: '100g' },
        { name: 'Spices', quantity: 'to taste' },
        { name: 'Coriander', quantity: '1 tbsp' },
        { name: 'Butter', quantity: '1 tbsp' }
      ],    },
    {
      name: 'Chicken Skewwers',
      price:'Price', 
      amt :'-12',
      image: 'https://www.foodfusion.com/wp-content/uploads/2018/03/2-1.jpg',
      name1: 'Shillet Pork',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/4/0/FNK_Skillet-Pork-Tenderloin-With-Spiced-Carrots-And-Couscous-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1507136270038.jpeg',
      name2: 'Ice Tea',
      price2:'Price', 
      amt2 :'-5',
      image2:'/pexels-t-dw-671091-1484678.jpg',
      ingredients: [
        { name: 'Chicken', quantity: '200g' },
        { name: 'Lemon Juice', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Cumin', quantity: '1 tsp' }
      ],    },
    {
      name: 'Quinoa With Beetroot',
      price:'Price', 
      amt :'-12',
      image: 'https://i.pinimg.com/originals/3e/b3/b3/3eb3b3688c84094a506825c02f63671c.jpg',
      name1: 'Skillet Salmon',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg',
      name2: 'Rose Wine',
      price2:'Price', 
      amt2 :'-5',
      image2:'https://i1.wp.com/www.bms.co.in/wp-content/uploads/2014/08/rose-wine.jpg',
      ingredients: [
        { name: 'Chicken', quantity: '200g' },
        { name: 'Lemon Juice', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Cumin', quantity: '1 tsp' }
      ],    },
    {
      name: 'Indian Chaat',
      price:'Price', 
      amt :'-12',
      image: 'https://i.pinimg.com/originals/9d/03/83/9d0383367e62389280c15af15a9fb415.jpg',
      name1: 'Tofu Chanpuru',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://th.bing.com/th/id/R.d15364898741690146d39c0b52089e5c?rik=CIIKPILm2e33zw&riu=http%3a%2f%2fimages.media-allrecipes.com%2fimages%2f67886.jpg&ehk=Ruco8rQmEcJMzF%2b2nj2z6Oj5zFc2VBvS61sC1KoUoQQ%3d&risl=&pid=ImgRaw&r=0',
      name2: 'Graped Wine',
      price2:'Price', 
      amt2 :'-5',
      image2:'https://th.bing.com/th/id/OIP.ofE9tpztGXk5HQCM170xVAHaJQ?w=640&h=800&rs=1&pid=ImgDetMain',
      ingredients: [
        { name: 'Chicken', quantity: '200g' },
        { name: 'Lemon Juice', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Cumin', quantity: '1 tsp' }
      ],    },
    {
      name: 'Veg Kebab Platter',
      price:'Price', 
      amt :'-12',
      image: 'https://assets.zeezest.com/images/PROD_1_1663427531378.jpg',
      name1: 'Spaghetti',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://article-imgs.scribdassets.com/pa0w0g6kg7mt9fr/images/file620TI2B0.jpg',
      name2: 'Sparlink Wine',
      price2:'Price', 
      amt2 :'-5',
      image2:'https://pinotsquirrel.com/wp-content/uploads/2022/07/Depositphotos_34886951_L-1-960x640.jpg',
      ingredients: [
        { name: 'Chicken', quantity: '200g' },
        { name: 'Lemon Juice', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Cumin', quantity: '1 tsp' }
      ],    },
    {
      name: 'Tamato Bruschetta',
      price:'Price', 
      amt :'-12',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Tomato-bruschetta-308295f.jpg?quality=45&resize=960,872',
      name1: 'Shrimp Boil',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://www.pinoycookingrecipes.com/uploads/7/6/7/8/7678114/img-1613263983917-1_orig.png',
      name2: 'YellowStones',
      price2:'Price', 
      amt2 :'-5',
      image2:'https://cdn-s3.touchofmodern.com/products/002/557/588/bceed9f6f129b06604ddeb87da1b7ad2_large.jpg?1670354362',
      ingredients: [
        { name: 'Chicken', quantity: '200g' },
        { name: 'Lemon Juice', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Cumin', quantity: '1 tsp' }
      ],    },
    {
      name: 'Deep Fried Brussels',
      price:'Price', 
      amt :'-12',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2016/11/deep-fried-brussels-d3d9a88.jpg?quality=45&resize=2000,1818',
      name1: 'Butter Chicken',
      price1:'Price', 
      amt1 :'-25',
      image1:'https://cookingchew.com/wp-content/uploads/2022/07/CO2191-What-to-Serve-With-Butter-Chicken-1080x1080.jpg',
      name2: 'Cappuccino',
      price2:'Price', 
      amt2 :'-5',
      image2:'/pexels-taufiq-muhammad-3449681-5151354.jpg',
      ingredients: [
        { name: 'Chicken', quantity: '200g' },
        { name: 'Lemon Juice', quantity: '2 tbsp' },
        { name: 'Garlic', quantity: '2 cloves' },
        { name: 'Paprika', quantity: '1 tsp' },
        { name: 'Cumin', quantity: '1 tsp' }
      ],
    },
  ];
  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    this.filterResults();
  }

  showSearchResults() {
    this.isSearchActive = true;
    this.filterResults();
  }

  hideSearchResults() {
    if (!this.searchQuery) {
      this.isSearchActive = false;
    }
  }

  // Filter menu items based on search query
  filterResults() {
    if (this.searchQuery) {
      this.filteredResults = this.menuItems.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredResults = [];
    }
  }
}
