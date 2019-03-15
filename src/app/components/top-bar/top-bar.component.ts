import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  esconder () {
    /* Sidebar toggle behaviour */
    var widt = document.getElementById('sidebar-toggle').clientWidth;
    console.log('entrando a boton');
    if (document.getElementById('sidebar-toggle').classList.contains('esconder')){
      console.log('apunto de estilo');
      
      document.getElementById('sidebar-toggle').style.marginLeft = '0';
      console.log('ya se cerro');

      var set = setInterval(() => {
        document.getElementById('sidebar-toggle').classList.remove('esconder');
        clearInterval(set);
      },2000);
    } else {
      
      console.log('entrando a aparecer');
      document.getElementById('sidebar-toggle').classList.add('esconder');
      document.getElementById('sidebar-toggle').style.marginLeft = '-'+widt+'px';
      console.log('entrando apareciendo');
      

    }
   

   /*  const active = $('.sidebar .active');

    if (active.length && active.parent('.collapse').length) {
        const parent = active.parent('.collapse');

        parent.prev('a').attr('aria-expanded', true);
        parent.addClass('show');
    }

    
    if($('.sidebar-sticky').length > 0) {
        new SimpleBar($('.sidebar-sticky .sidebar-content')[0])
    } */
}
logout(){
  localStorage.clear();
  this.router.navigateByUrl('/signIn');
}


}
