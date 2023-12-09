import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPlayPage } from './crear-play.page';

describe('CrearPlayPage', () => {
  let component: CrearPlayPage;
  let fixture: ComponentFixture<CrearPlayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
