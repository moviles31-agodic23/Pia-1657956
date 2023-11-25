import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentModalPage } from './comment-modal.page';

describe('CommentModalPage', () => {
  let component: CommentModalPage;
  let fixture: ComponentFixture<CommentModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
