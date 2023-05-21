import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export interface Menu {
  icon?: string
  title: string
  children?: Menu[]
  expanded?: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  name = 'PERFIL:';
  menus: Menu[] = [
    {
      title: 'Pagina inicial',
      icon: 'menu'
    },
    {
      icon: 'home',
      title: 'Revisor',
      children: [
        {
          title: 'Movisor',
        }
      ],
      expanded: false
    },
    {
      icon: 'home',
      title: 'Ooperador de caixa',
      children: [
        {
          title: 'Yoixes'
        }
      ],
      expanded: false
    }
  ];

  burgerMenuShow = false;

  @ViewChild('burgerBtn', { static: true }) burgerBtn!: ElementRef;
  @ViewChild('burgerMenu', { static: true }) burgerMenu!: ElementRef;

  ngAfterViewInit() {
    addEventListener('mousedown', e => {
      if (!this.burgerBtn.nativeElement.contains(e.target) && !this.burgerMenu.nativeElement.contains(e.target)) {
        this.burgerMenuShow = false;
      }
    })
  }

  BurgerClick() {
    this.burgerMenuShow = !this.burgerMenuShow;
  }
}
