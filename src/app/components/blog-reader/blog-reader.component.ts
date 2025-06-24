import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface BlogArticle {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  readTime: string;
  tags: string[];
}

@Component({
  selector: 'app-blog-reader',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-reader.component.html',
  styleUrl: './blog-reader.component.css'
})
export class BlogReaderComponent implements OnInit {
  article: BlogArticle | null = null;
  relatedArticles: BlogArticle[] = [];
  
  // Sample articles data (in a real app, this would come from a service)
  private articles: BlogArticle[] = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <h3>Section principale</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        
        <h3>Conclusion</h3>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      `,
      imageUrl: 'https://picsum.photos/800/400?random=1',
      publishDate: '15 Mars 2024',
      author: 'Jean Dupont',
      readTime: '5 min',
      tags: ['Développement', 'Web', 'Angular']
    },
    {
      id: 2,
      title: 'Duis aute irure dolor in reprehenderit',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      content: `
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
        <h3>Points importants</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
        
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
      `,
      imageUrl: 'https://picsum.photos/800/400?random=2',
      publishDate: '12 Mars 2024',
      author: 'Marie Martin',
      readTime: '7 min',
      tags: ['Design', 'UX', 'Interface']
    },
    {
      id: 3,
      title: 'Sed ut perspiciatis unde omnis iste natus',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      content: `
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        
        <h3>Développement moderne</h3>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
      `,
      imageUrl: 'https://picsum.photos/800/400?random=3',
      publishDate: '10 Mars 2024',
      author: 'Pierre Durand',
      readTime: '4 min',
      tags: ['JavaScript', 'Frontend', 'Performance']
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.loadArticle(articleId);
    });
  }

  private loadArticle(id: number): void {
    this.article = this.articles.find(article => article.id === id) || null;
    
    if (this.article) {
      // Load related articles (exclude current article)
      this.relatedArticles = this.articles
        .filter(article => article.id !== id)
        .slice(0, 2);
    }
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  navigateToArticle(articleId: number): void {
    this.router.navigate(['/blog', articleId]);
  }
}
