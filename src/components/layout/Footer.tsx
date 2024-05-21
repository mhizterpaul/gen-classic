import React from 'react'
type Props = {

}


const Footer: React.FC<Props> = (props: Props) => {
  return (
    <footer>
        <div>
        <div>
          <ul>
            {Object.keys(props.contact).map((key, index) => {
              return (
                <li key={index}>
                  <a href={props.contact[key]}>{key}</a>
                </li>
              )})
            }
          </ul>
        </div>
        <div>
          <ul>
            {Object.keys(props.contact).map((key, index) => {
              return (
                <li key={index}>
                  <a href={props.contact[key]}>{key}</a>
                </li>
              )})
            }
          </ul>
        </div>
        <div>
          <ul>
            {Object.keys(props.categories).map((key, index) => {
              return (
                <li key={index}>
                  <a href={props.categories[key]}>{key}</a>
                </li>
              )})
            }
          </ul>
        </div>
        <div>
          <ul>
            {Object.keys(props.helpCenter).map((key, index) => {
              return (
                <li key={index}>
                  <a href={props.helpCenter[key]}>{key}</a>
                </li>
              )})
            }
          </ul>
        </div>
        </div>
        <div>
          <span>
            <a>
              © 2024 Gen-CMS
            </a>
          </span>
          <span>
            <a>
              Terms of Use
            </a>
          </span> 
          <span>
            <a>
            Privacy Policy
            </a>
          </span>
          <span>
            <a>
              Terms of Service
            </a>
          </span>
        </div>
    </footer>
  )
}

export default Footer