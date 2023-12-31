export class Tag{
    static readonly ANGULAR=new Tag('Angular','red');
    static readonly TYPESCRIPT= new Tag('TypeScript','darkred');
    static readonly PYTHON =new Tag('Python','pink');
    static readonly CSHARP = new Tag('C#','green');
    static readonly JAVA= new Tag('Java','orange');
    static readonly ASPNET = new Tag('ASP.NET','purple');
    static readonly REACT = new Tag('React','blue');
    static readonly SPRINGBOOT=new Tag('SpringBoot','green');
    static readonly JAVASCRIPT =new Tag('JavaScript','orange');
    static readonly NODEJS = new Tag('NodeJS','brown');
    static readonly HTML = new Tag('HTML','green');
    static readonly CSS = new Tag('CSS','red');

    private constructor(private readonly key: string,public readonly color:string){

    }
    toString(){
        return this.key;
    }
}