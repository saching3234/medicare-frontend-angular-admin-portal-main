import { Component, OnInit } from '@angular/core';
import { CategoryServicesService } from 'src/app/services/category-services.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {
  cat :any;
  constructor(private catSer:CategoryServicesService) { }

  ngOnInit(): void {
  }

  submit(addNewCat){
   this.cat=addNewCat.value;
   this.catSer.saveCat(this.cat).subscribe(res=>{
    alert("New Category Added");
   },
   err=>{
    alert("Failed to save the new category"+err);
    console.log(err);
   })
   console.log(this.cat);

  }

}
