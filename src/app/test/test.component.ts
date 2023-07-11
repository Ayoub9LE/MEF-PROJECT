import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  dropdownButtons: Array<{ text: string, isActive: boolean, options: string[] }> = [
    { text: 'Button 1', isActive: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { text: 'Button 2', isActive: false, options: [] },
    // Add more dropdown buttons as needed
  ];

  toggleDropdown(index: number): void {
    this.dropdownButtons.forEach((button, i) => {
      button.isActive = i === index ? !button.isActive : false;
    });
  }
}
