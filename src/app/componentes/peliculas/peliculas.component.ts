import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  id: string | null =""
  

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
  }
  irSeries(nombre:string){
    this.router.navigate(['/series',nombre])
  }

}
