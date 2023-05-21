import { Component, Input } from '@angular/core';
import { Menu } from '../home.component';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() title: string = '';
  @Input() icon?: string = '';
  @Input() children?: Menu[];
  @Input() expanded?: boolean;

  expand() {
    if (!this.children)
      return;
    this.expanded = !this.expanded;
  }
}
