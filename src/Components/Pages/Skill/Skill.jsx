import Title from "../../ShareComponent/NavBar/Title"

const Skill = () =>{
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='Skills' summary='Technologies I Like To Work With'></Title>
            <div className="w-2/4 mx-auto h-[75vh] border-t border-l border-r hidden lg:block border-secondaryColor rounded-full mt-12 relative">
               <img src="https://avatars.githubusercontent.com/u/99094220?s=400&u=c2a7cfe6dcdd2acdcc6be2ed33520f25c60ea23b&v=4" className="w-[200px] absolute top-32 rounded-full right-32" alt="" /> 
               {/* skill image */}
               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/html.png" alt="html image" className="w-[40px] absolute left-12 bottom-12" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/css.png" alt="html image" className="w-[40px] absolute -left-2 bottom-36" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/tailwind.png" alt="html image" className="w-[45px] absolute -left-6 bottom-60" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/html.png" alt="html image" className="w-[40px] absolute left-12 bottom-12" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/bootstrap.png" alt="html image" className="w-[40px] absolute -left-2 top-32" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/js.png" alt="html image" className="w-[40px] absolute left-10 top-14" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/jequery.png" alt="html image" className="w-[45px] absolute left-28 top-0" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/react.png" alt="html image" className="w-[40px] absolute right-56 -top-4" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

               <img src="https://batisteo.gallerycdn.vsassets.io/extensions/batisteo/vscode-django/1.14.0/1696077925649/Microsoft.VisualStudio.Services.Icons.Default" alt="html image" className="w-[40px] absolute right-16 top-8" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

               <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />
               
            </div>
        </div>
    )
}

export default Skill