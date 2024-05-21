import React from 'react'
import Button from './utilities/Button'
type Props = {

}

const Feeds: React.FC<Props> = (props) => {
  
  const articleMake = (arg) => (<><h5>
  <Button outline={true} text={arg.article.type} /> 
  <small>
    {arg.article.duration} Hours read
  </small>
</h5>
<p>{arg.article.content}</p></>);

  return (
    <section>
    <div className="flex flex-col justify-between gap-y-5">
      <img alt={props.title} src={props.src}></img>
      <div>
        {articleMake(props.articles[0])}
        <div>
          <Button outline={true} text="Read More" />
          <Button outline={false} backgroundColor={"unset"} image={} imageAlt={} text={"by " + props.articles[0].author} />
         
        </div>
    </div>
   <div>
   {
    props.articles.map((article, index) => {
      return (
        <div key={index} className="border-0 border-b-1 ">
          {articleMake(article)}
        </div>
 
      )
    })
   }

   </div>
   </section>
  )
}

export default Feeds