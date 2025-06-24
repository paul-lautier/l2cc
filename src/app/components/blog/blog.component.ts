import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogArticle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articles: BlogArticle[] = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://picsum.photos/400/250?random=1',
      publishDate: '15 Mars 2024',
      author: 'Jean Dupont',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Duis aute irure dolor in reprehenderit',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: 'https://picsum.photos/400/250?random=2',
      publishDate: '12 Mars 2024',
      author: 'Marie Martin',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Sed ut perspiciatis unde omnis iste natus',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
      imageUrl: 'https://picsum.photos/400/250?random=3',
      publishDate: '10 Mars 2024',
      author: 'Pierre Durand',
      readTime: '4 min'
    }
  ];
}
