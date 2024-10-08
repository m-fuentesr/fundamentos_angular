import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteosComponent } from './posteos.component';

describe('PosteosComponent', () => {
  let component: PosteosComponent;
  let fixture: ComponentFixture<PosteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosteosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
