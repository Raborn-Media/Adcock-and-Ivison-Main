import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footernav}>
          <div>
            <p
              style={{
                color: "#81817b",
              }}
            >
              MENU
            </p>
          </div>
          <ul>
            <li>
              <Link href="/home">HOME</Link>
            </li>
            <li>
              <Link href="/attorneys">YOUR ATTORNEYS</Link>
            </li>
            <li>
              <Link href="/claims">YOUR CASE</Link>
            </li>
            <li>
              <Link href="/news">IN THE NEWS</Link>
            </li>
            <li>
              <Link href="/talk">TALK TO US</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footermid}>
          <div className={styles.logo}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 112.7 84.5"
              enableBackground="new 0 0 112.7 84.5"
              space="preserve"
              width="8rem"
              fill="#81817b"
            >
              <g>
                <path
                  d="M10.9,75.2h1.4c-0.6-1.7-0.1-2.5,1.7-2.7V12.1h86.2v60.7c0.8,0,1.4,0,1.5,0c0,0.8,0,1.6,0,2.4h1.5V9.1H10.9
		              V75.2z"
                />
                <path
                  d="M62.9,55.2c1.7,0,2.6-0.8,3-1.2l0.2-0.2l-0.2-0.2c-1.1-1.3-2.1-2.4-3.3-3.8c-0.9-0.9-1.8-2-2.9-3.2l-0.3-0.4L59,46.6
                  c-0.4,0.7-0.7,1.7-0.7,2.9C58.4,52.8,60.3,55.2,62.9,55.2z M59.4,46.8c2.7,3,4.4,4.9,6.2,7c-0.5,0.5-1.3,1.1-2.7,1.1
                  c-2.2,0-4.2-2.1-4.2-5.4C58.7,48.3,59,47.4,59.4,46.8z"
                />
                <path
                  d="M63.1,44.3c0.9-1,1.3-2.5,1.3-4.2c0-2.1-1.1-3.8-2.4-3.8c-1.1,0-2,1.3-2,3C60,40.9,61,42.4,63.1,44.3z M62,36.6
		              c1.1,0,2,1.5,2,3.4c0,1.5-0.4,2.8-1,3.7c-1.9-1.8-2.7-3.1-2.7-4.5C60.4,37.8,61.1,36.6,62,36.6z"
                />
                <path
                  d="M5.9,4.5V80h101.8V4.5H5.9z M103.1,75.2h-1.5l0,0c-14.9,0-36.9,0-51.9,0c0-0.7,0-1.5,0-2.3c1.2-0.3,2.5-0.5,3.7-0.8
                  c1.8-0.5,2.4-1.5,1.8-3.3c-1.6-4.8-3.3-9.6-5.1-14.3c-0.1-0.4-0.9-0.8-1.4-0.8c-5.8-0.1-11.6-0.1-17.4,0c-0.5,0-1.3,0.6-1.5,1.1
                  c-1.5,4.1-2.9,8.3-4.2,12.5c-1,3.3-0.1,4.6,3.3,5.2c1,0.2,1.9,0.3,3,0.4c0,0.8,0,1.5,0,2.3c-6.6,0-13.2,0-19.7,0l0,0h-1.3V9.1h92.2
                  V75.2z"
                />
                <path d="M40.1,26.6c-2.8,7.6-5.6,15.2-8.4,23c5.7,0,11.1,0,16.8,0c-2.7-7.8-5.3-15.4-8-23C40.4,26.5,40.3,26.6,40.1,26.6z" />
                <g>
                  <path
                    d="M13.9,12.1v60.4l0,0c3-0.3,5.2-1.9,6.3-4.7c2.8-6.9,5.6-13.7,8.3-20.6c4-10,8-20,11.8-30c0.7-1.8,1.7-2.7,3.8-2.8
                    c0.4,1.1,0.8,2.3,1.3,3.4c3.5,9.8,7.1,19.6,10.6,29.4c-1.4,1.3-2.2,2.6-2.2,4.6c0,3.3,2.2,6.8,6.4,7c0.7,2,1.5,4.1,2.2,6.1
                    c0.5,1.2,1,2.5,1.6,3.6c2.1,3.9,8.4,5.6,12.2,3c1-0.7,1.5-2.2,1.9-3.5s0.2-2.8,0.2-4.1c0-12.3,0-24.7,0-37c0-1.3-0.1-2.7-0.2-4
                    c-0.2-2.7-1.2-3.8-3.8-4.4c-0.8-0.2-1.5-0.2-2.3-0.3c-2-0.2-2-0.2-1.8-2.5c8,0,16,0,24.1,0c0,0.7,0,1.3,0,2.2
                    c-1.4,0.2-3,0.5-4.5,0.7c-2,0.4-3.2,1.6-3.4,3.7c-0.1,1.1-0.3,2.3-0.3,3.4c0,13.1,0,26.2,0,39.4c0,5.9,0.8,6.8,6.5,7.5
                    c0.4,0.1,4.9,0,7.4,0.1V12.1H13.9z M76.2,42.5V44l-0.9,0.1c-1.1,0.2-2,0.9-3.1,2.5c-0.9,1.3-1.6,2.5-2.7,4.3
                    c3.1,3.5,4.2,5.2,5.4,7.4l-0.2,0.4c-3.2,0-5.4-0.8-6.2-1.7c-0.3-0.3-0.9-1-1.9-2.1c-1.6,2.1-3.4,3.5-5.9,3.5
                    c-4.2,0-6.4-3.5-6.4-6.7c0-2.7,1.3-3.9,4.1-6c-1.1-1.2-2-2.8-2-4.8c0-3.6,2.6-6.4,6-6.4s5.5,2.4,5.5,5.8c0,1.1-0.4,2.1-1.4,2.9
                    c-0.6,0.6-1.2,1.1-2.4,2c1.3,1.3,2.8,2.8,4.3,4.5c0.9-1.7,1.5-2.6,1.9-3.6c0.5-1.2,0.4-1.7-0.7-2L68.8,44v-1.5H76.2z"
                  />
                </g>
              </g>
            </svg>
            <div>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 79 66.5"
                enableBackground="new 0 0 79 66.5"
                space="preserve"
                width="6.5rem"
              >
                <g>
                  <g>
                    <path
                      d="M7.3,10.2V7h1.4C9,7,9.2,7,9.3,7.1c0.1,0.1,0.3,0.2,0.3,0.3c0.1,0.1,0.1,0.3,0.1,0.5c0,0.2-0.1,0.4-0.2,0.6
                        C9.4,8.6,9.2,8.7,8.9,8.7C9,8.8,9.1,8.8,9.2,8.9C9.3,9,9.4,9.1,9.5,9.3l0.5,0.9H9.5L9.1,9.5C9,9.3,8.9,9.2,8.8,9.1
                        C8.7,9,8.7,8.9,8.6,8.9c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.2,0H7.7v1.4H7.3z M7.7,8.4h0.9c0.2,0,0.3,0,0.4-0.1
                        c0.1,0,0.2-0.1,0.2-0.2C9.3,8.1,9.4,8,9.4,7.9c0-0.1-0.1-0.3-0.2-0.4S8.9,7.4,8.7,7.4h-1V8.4z"
                    />
                    <path
                      d="M10.1,10.2L11.3,7h0.4l1.3,3.1h-0.5l-0.4-1h-1.3l-0.3,1H10.1z M11,8.9h1.1L11.8,8c-0.1-0.3-0.2-0.5-0.2-0.7
			                c0,0.2-0.1,0.4-0.2,0.6L11,8.9z"
                    />
                    <path d="M13.9,10.2V7.4h-1V7h2.5v0.4h-1v2.8H13.9z" />
                    <path d="M15.7,10.2V7H18v0.4h-1.9v1h1.7v0.4h-1.7v1.1h1.9v0.4H15.7z" />
                    <path
                      d="M18.7,10.2V7h1.1c0.2,0,0.4,0,0.6,0c0.2,0,0.3,0.1,0.5,0.2c0.2,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.1,0.5,0.1,0.7
                      c0,0.2,0,0.5-0.1,0.6S21.1,9.5,21,9.7c-0.1,0.1-0.2,0.2-0.3,0.3s-0.2,0.1-0.4,0.2s-0.3,0.1-0.5,0.1H18.7z M19.1,9.8h0.7
                      c0.2,0,0.4,0,0.5-0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0.1-0.4,0.1-0.6c0-0.3-0.1-0.6-0.2-0.8
                      s-0.2-0.3-0.4-0.4c-0.1,0-0.3-0.1-0.5-0.1h-0.7V9.8z"
                    />
                    <path
                      d="M23,10.2V7h1.2c0.2,0,0.4,0,0.6,0.1c0.1,0.1,0.3,0.2,0.3,0.3c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.3-0.1,0.4
                      c-0.1,0.1-0.2,0.2-0.3,0.3c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.3,0.2,0.5c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3
                      c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0-0.3,0.1-0.5,0.1H23z M23.5,8.3h0.7c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.2s0.1-0.2,0.1-0.3
                      c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.3,0-0.5,0h-0.6V8.3z M23.5,9.8h0.8c0.1,0,0.2,0,0.3,0
                      c0.1,0,0.2,0,0.2-0.1s0.1-0.1,0.2-0.2C25,9.4,25,9.3,25,9.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.3-0.1-0.5-0.1
                      h-0.7V9.8z"
                    />
                    <path d="M26.9,10.2V8.8L25.7,7h0.5L26.8,8c0.1,0.2,0.2,0.4,0.3,0.5c0.1-0.2,0.2-0.3,0.3-0.6L28.1,7h0.5l-1.3,1.8v1.3H26.9z" />
                  </g>
                  <g>
                    <path
                      d="M9.6,26.7l0.8-0.1c0,0.3,0.1,0.6,0.3,0.8c0.1,0.2,0.3,0.4,0.6,0.5s0.6,0.2,0.9,0.2c0.3,0,0.6,0,0.8-0.1
                      c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.3-0.6-0.4c-0.2-0.1-0.5-0.2-1.1-0.3
                      c-0.6-0.1-1-0.3-1.2-0.4c-0.3-0.2-0.5-0.3-0.7-0.6c-0.1-0.2-0.2-0.5-0.2-0.8c0-0.3,0.1-0.6,0.3-0.9c0.2-0.3,0.4-0.5,0.8-0.6
                      s0.7-0.2,1.1-0.2c0.5,0,0.9,0.1,1.2,0.2c0.3,0.1,0.6,0.4,0.8,0.6c0.2,0.3,0.3,0.6,0.3,1l-0.8,0.1c0-0.4-0.2-0.7-0.4-0.9
                      c-0.2-0.2-0.6-0.3-1.1-0.3c-0.5,0-0.8,0.1-1.1,0.3c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.2,0.1,0.4,0.2,0.5c0.2,0.1,0.6,0.3,1.2,0.4
                      s1.1,0.3,1.4,0.4c0.4,0.2,0.6,0.4,0.8,0.6c0.2,0.3,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.3,0.9s-0.5,0.5-0.8,0.7
                      c-0.3,0.2-0.7,0.2-1.2,0.2c-0.6,0-1-0.1-1.4-0.2c-0.4-0.2-0.7-0.4-0.9-0.7S9.7,27.1,9.6,26.7z"
                    />
                    <path
                      d="M18.4,28.6V28c-0.3,0.5-0.8,0.8-1.4,0.8c-0.3,0-0.5,0-0.7-0.2c-0.2-0.1-0.4-0.2-0.5-0.4c-0.1-0.2-0.2-0.3-0.2-0.6
                      c0-0.1,0-0.4,0-0.7v-2.7h0.8v2.5c0,0.4,0,0.7,0,0.8c0,0.2,0.1,0.4,0.3,0.5c0.2,0.1,0.3,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2
                      c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0.1-0.5,0.1-0.9v-2.4h0.8v4.4H18.4z"
                    />
                    <path
                      d="M20.3,30.3v-6.1H21v0.6c0.2-0.2,0.3-0.4,0.5-0.5s0.4-0.2,0.7-0.2c0.4,0,0.7,0.1,1,0.3c0.3,0.2,0.5,0.5,0.7,0.8
                      s0.2,0.7,0.2,1.2c0,0.5-0.1,0.9-0.2,1.2c-0.2,0.4-0.4,0.6-0.7,0.8c-0.3,0.2-0.6,0.3-1,0.3c-0.2,0-0.5-0.1-0.7-0.2
                      c-0.2-0.1-0.4-0.2-0.5-0.4v2.2H20.3z M21,26.5c0,0.6,0.1,1,0.3,1.3s0.5,0.4,0.8,0.4c0.3,0,0.6-0.1,0.9-0.4
                      c0.2-0.3,0.4-0.7,0.4-1.3c0-0.6-0.1-1-0.3-1.3s-0.5-0.4-0.8-0.4c-0.3,0-0.6,0.1-0.8,0.4C21.1,25.4,21,25.9,21,26.5z"
                    />
                    <path
                      d="M28.1,27.2l0.8,0.1c-0.1,0.5-0.3,0.8-0.7,1.1c-0.3,0.3-0.8,0.4-1.3,0.4c-0.6,0-1.2-0.2-1.5-0.6s-0.6-1-0.6-1.7
                      c0-0.7,0.2-1.3,0.6-1.7c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.7c0,0,0,0.1,0,0.2h-3.3
                      c0,0.5,0.2,0.9,0.4,1.1s0.6,0.4,0.9,0.4c0.3,0,0.5-0.1,0.7-0.2C27.8,27.8,28,27.5,28.1,27.2z M25.6,26h2.5c0-0.4-0.1-0.7-0.3-0.8
                      c-0.2-0.3-0.5-0.4-0.9-0.4c-0.3,0-0.6,0.1-0.9,0.3C25.8,25.3,25.6,25.6,25.6,26z"
                    />
                    <path
                      d="M29.8,28.6v-4.4h0.7v0.7c0.2-0.3,0.3-0.5,0.5-0.6s0.3-0.2,0.5-0.2c0.3,0,0.5,0.1,0.8,0.2L31.9,25
			                c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.3,0-0.4,0.1s-0.2,0.2-0.3,0.4c-0.1,0.3-0.1,0.6-0.1,0.9v2.3H29.8z"
                    />
                    <path d="M35.1,28.6v-6.1h0.8v5.4h3v0.7H35.1z" />
                    <path
                      d="M42.7,28.1c-0.3,0.2-0.5,0.4-0.8,0.5s-0.5,0.1-0.8,0.1c-0.5,0-0.9-0.1-1.1-0.4c-0.3-0.2-0.4-0.5-0.4-0.9
                      c0-0.2,0-0.4,0.1-0.6c0.1-0.2,0.2-0.3,0.4-0.4s0.3-0.2,0.5-0.2c0.1,0,0.4-0.1,0.7-0.1c0.6-0.1,1.1-0.2,1.3-0.3c0-0.1,0-0.2,0-0.2
                      c0-0.3-0.1-0.5-0.2-0.6c-0.2-0.2-0.5-0.3-0.9-0.3c-0.4,0-0.6,0.1-0.8,0.2c-0.2,0.1-0.3,0.3-0.4,0.7l-0.7-0.1
                      c0.1-0.3,0.2-0.6,0.3-0.8c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.1,0.6-0.2,1-0.2c0.4,0,0.7,0,0.9,0.1c0.2,0.1,0.4,0.2,0.5,0.3
                      s0.2,0.3,0.2,0.5c0,0.1,0,0.4,0,0.7v1c0,0.7,0,1.1,0,1.3c0,0.2,0.1,0.4,0.2,0.5h-0.8C42.7,28.5,42.7,28.3,42.7,28.1z M42.6,26.4
                      c-0.3,0.1-0.7,0.2-1.2,0.3c-0.3,0-0.5,0.1-0.7,0.2s-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0.1,0.4,0.2,0.5
                      c0.2,0.1,0.4,0.2,0.7,0.2c0.3,0,0.5-0.1,0.8-0.2c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.8V26.4z"
                    />
                    <path
                      d="M45.3,28.6L44,24.2h0.8l0.7,2.6l0.3,1c0,0,0.1-0.4,0.2-0.9l0.7-2.6h0.8l0.7,2.6l0.2,0.8l0.3-0.9l0.8-2.6h0.7l-1.4,4.4
			                  h-0.8L47.2,26L47,25.2l-0.9,3.4H45.3z"
                    />
                    <path
                      d="M50.7,30.4l-0.1-0.7c0.2,0,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.4-0.1s0.2-0.1,0.2-0.2c0-0.1,0.1-0.3,0.2-0.6c0,0,0-0.1,0.1-0.2
                      l-1.7-4.4h0.8l0.9,2.6c0.1,0.3,0.2,0.7,0.3,1c0.1-0.3,0.2-0.7,0.3-1l0.9-2.6h0.8l-1.7,4.5c-0.2,0.5-0.3,0.8-0.4,1
                      c-0.1,0.2-0.3,0.4-0.5,0.5c-0.2,0.1-0.4,0.2-0.6,0.2C51,30.4,50.8,30.4,50.7,30.4z"
                    />
                    <path
                      d="M58,27.2l0.8,0.1c-0.1,0.5-0.3,0.8-0.7,1.1c-0.3,0.3-0.8,0.4-1.3,0.4c-0.6,0-1.2-0.2-1.5-0.6s-0.6-1-0.6-1.7
                      c0-0.7,0.2-1.3,0.6-1.7c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.7c0,0,0,0.1,0,0.2h-3.3
                      c0,0.5,0.2,0.9,0.4,1.1s0.6,0.4,0.9,0.4c0.3,0,0.5-0.1,0.7-0.2C57.7,27.8,57.9,27.5,58,27.2z M55.5,26H58c0-0.4-0.1-0.7-0.3-0.8
                      c-0.2-0.3-0.5-0.4-0.9-0.4c-0.3,0-0.6,0.1-0.9,0.3C55.7,25.3,55.6,25.6,55.5,26z"
                    />
                    <path
                      d="M59.7,28.6v-4.4h0.7v0.7c0.2-0.3,0.3-0.5,0.5-0.6s0.3-0.2,0.5-0.2c0.3,0,0.5,0.1,0.8,0.2L61.9,25
			                c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.3,0-0.4,0.1s-0.2,0.2-0.3,0.4c-0.1,0.3-0.1,0.6-0.1,0.9v2.3H59.7z"
                    />
                    <path
                      d="M62.3,27.3l0.7-0.1c0,0.3,0.2,0.5,0.3,0.7c0.2,0.2,0.5,0.2,0.8,0.2c0.3,0,0.6-0.1,0.8-0.2s0.3-0.3,0.3-0.5
                      c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.4-0.2-0.8-0.3c-0.6-0.1-0.9-0.3-1.1-0.4s-0.4-0.2-0.5-0.4c-0.1-0.2-0.2-0.4-0.2-0.6
                      c0-0.2,0-0.4,0.1-0.5s0.2-0.3,0.4-0.4c0.1-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.4-0.1,0.6-0.1c0.3,0,0.7,0.1,0.9,0.2
                      c0.3,0.1,0.5,0.2,0.6,0.4c0.1,0.2,0.2,0.4,0.3,0.7l-0.7,0.1c0-0.2-0.1-0.4-0.3-0.5c-0.2-0.1-0.4-0.2-0.7-0.2
                      c-0.3,0-0.6,0.1-0.7,0.2s-0.2,0.2-0.2,0.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.3,0.1,0.7,0.2
                      c0.5,0.1,0.9,0.3,1.1,0.3c0.2,0.1,0.4,0.2,0.5,0.4s0.2,0.4,0.2,0.6c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.4,0.4-0.6,0.5
                      c-0.3,0.1-0.6,0.2-0.9,0.2c-0.6,0-1-0.1-1.3-0.4C62.6,28.1,62.4,27.8,62.3,27.3z"
                    />
                  </g>
                  <g>
                    <path d="M17.4,35.7v-4.3h0.9v1.9l1.7-1.9h1.2l-1.6,1.7l1.7,2.6h-1.1l-1.2-2l-0.7,0.7v1.3H17.4z" />
                    <path
                      d="M23.4,34.7l0.8,0.1c-0.1,0.3-0.3,0.5-0.5,0.7s-0.5,0.2-0.8,0.2c-0.5,0-0.9-0.2-1.2-0.5c-0.2-0.3-0.3-0.6-0.3-1.1
                      c0-0.5,0.1-0.9,0.4-1.2c0.3-0.3,0.6-0.4,1-0.4c0.5,0,0.8,0.2,1.1,0.5c0.3,0.3,0.4,0.8,0.4,1.4h-2c0,0.2,0.1,0.4,0.2,0.6
                      s0.3,0.2,0.5,0.2c0.1,0,0.2,0,0.3-0.1C23.3,35,23.4,34.9,23.4,34.7z M23.5,33.9c0-0.2-0.1-0.4-0.2-0.5s-0.3-0.2-0.4-0.2
                      c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5H23.5z"
                    />
                    <path
                      d="M27.8,35.7h-0.8v-1.6c0-0.3,0-0.5-0.1-0.6c0-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.3,0-0.4,0.1
                      s-0.2,0.2-0.2,0.3c0,0.1-0.1,0.4-0.1,0.7v1.4h-0.8v-3.1h0.8v0.5c0.3-0.3,0.6-0.5,1-0.5c0.2,0,0.3,0,0.5,0.1
                      c0.1,0.1,0.3,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0,0.3,0,0.5V35.7z"
                    />
                    <path
                      d="M30.2,35.7v-4.3H32c0.5,0,0.8,0,1,0.1c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.2,0.2,0.4,0.2,0.7c0,0.3-0.1,0.6-0.3,0.8
                      c-0.2,0.2-0.5,0.3-0.8,0.4c0.2,0.1,0.3,0.2,0.5,0.4c0.1,0.1,0.3,0.4,0.5,0.7l0.5,0.8h-1l-0.6-0.9c-0.2-0.3-0.4-0.5-0.5-0.6
                      c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2,0-0.4,0h-0.2v1.8H30.2z M31.1,33.2h0.6c0.4,0,0.7,0,0.8-0.1c0.1,0,0.2-0.1,0.2-0.2
                      c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.3,0-0.6,0h-0.7V33.2z"
                    />
                    <path d="M34.5,35.7v-0.8h0.8v0.8H34.5z" />
                    <path d="M41.7,35.7h-0.9l-0.4-1h-1.7l-0.4,1h-0.9l1.7-4.3H40L41.7,35.7z M40.1,34l-0.6-1.6L38.9,34H40.1z" />
                    <path
                      d="M45,35.7h-0.8v-0.5c-0.1,0.2-0.3,0.3-0.4,0.4s-0.3,0.1-0.5,0.1c-0.4,0-0.7-0.1-0.9-0.4c-0.3-0.3-0.4-0.7-0.4-1.2
                      c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.6-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4v-1.5H45V35.7z M42.8,34.1c0,0.3,0,0.6,0.1,0.7
                      c0.1,0.2,0.3,0.3,0.6,0.3c0.2,0,0.3-0.1,0.5-0.2s0.2-0.4,0.2-0.7c0-0.4-0.1-0.6-0.2-0.8s-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2
                      S42.8,33.8,42.8,34.1z"
                    />
                    <path
                      d="M48.5,33.5l-0.8,0.1c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.4-0.2,0.7
                      c0,0.4,0.1,0.6,0.2,0.8c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.5l0.8,0.1c-0.1,0.4-0.2,0.6-0.5,0.8
                      c-0.2,0.2-0.6,0.3-0.9,0.3c-0.5,0-0.8-0.1-1.1-0.4c-0.3-0.3-0.4-0.7-0.4-1.2c0-0.5,0.1-0.9,0.4-1.2c0.3-0.3,0.6-0.4,1.1-0.4
                      c0.4,0,0.7,0.1,0.9,0.2S48.4,33.2,48.5,33.5z"
                    />
                    <path
                      d="M48.9,34.1c0-0.3,0.1-0.5,0.2-0.8c0.1-0.3,0.3-0.4,0.6-0.6c0.2-0.1,0.5-0.2,0.8-0.2c0.5,0,0.8,0.2,1.1,0.5
                      s0.4,0.7,0.4,1.1c0,0.5-0.2,0.9-0.5,1.2c-0.3,0.3-0.7,0.5-1.1,0.5c-0.3,0-0.6-0.1-0.8-0.2c-0.3-0.1-0.5-0.3-0.6-0.6
                      C49,34.8,48.9,34.5,48.9,34.1z M49.7,34.2c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2
                      c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2C49.8,33.6,49.7,33.8,49.7,34.2z"
                    />
                    <path
                      d="M55.4,33.5l-0.8,0.1c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.4-0.2,0.7
                      c0,0.4,0.1,0.6,0.2,0.8c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.5l0.8,0.1c-0.1,0.4-0.2,0.6-0.5,0.8
                      c-0.2,0.2-0.6,0.3-0.9,0.3c-0.5,0-0.8-0.1-1.1-0.4c-0.3-0.3-0.4-0.7-0.4-1.2c0-0.5,0.1-0.9,0.4-1.2c0.3-0.3,0.6-0.4,1.1-0.4
                      c0.4,0,0.7,0.1,0.9,0.2S55.3,33.2,55.4,33.5z"
                    />
                    <path d="M56,35.7v-4.3h0.8v2.3l1-1.1h1l-1.1,1.1l1.1,2H58l-0.8-1.4l-0.4,0.4v1H56z" />
                  </g>
                  <g>
                    <path
                      d="M67.6,22.6C68,22.2,68.4,22,69,22s1,0.2,1.4,0.5c0.4,0.4,0.5,0.8,0.5,1.4s-0.2,1-0.5,1.4c-0.4,0.4-0.8,0.5-1.4,0.5
                      s-1-0.2-1.4-0.5C67.2,25,67,24.5,67,24S67.2,22.9,67.6,22.6z M67.3,24c0,0.5,0.2,0.9,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5
                      c0.5,0,0.9-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2s-0.2-0.9-0.5-1.2s-0.7-0.5-1.2-0.5s-0.9,0.2-1.2,0.5S67.3,23.4,67.3,24z
                      M68.2,22.7h0.9c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.2,0.3,0.2,0.5c0,0.2-0.1,0.4-0.2,0.5s-0.3,0.2-0.5,0.3l0.7,1h-0.5l-0.6-1h-0.3v1
                      h-0.4V22.7z M68.6,23v0.9h0.5c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.3-0.2-0.4-0.5-0.4H68.6z"
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      d="M71.6,3.3H6.8c-1.9,0-3.4,1.5-3.4,3.4v40.2H75V6.8C75,4.9,73.5,3.3,71.6,3.3z"
                    />
                    <path
                      d="M53.7,58c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.5-0.1h-0.9v0.9h0.8c0.2,0,0.3,0,0.4-0.1
			                C53.6,58.2,53.7,58.1,53.7,58z"
                    />
                    <path
                      d="M27.6,57.4c-0.1-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.5,0.1-0.7,0.3s-0.3,0.5-0.3,0.9c0,0.3,0.1,0.6,0.3,0.8
			                c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3s0.3-0.5,0.3-0.8c0-0.2,0-0.4-0.1-0.6C27.9,57.6,27.8,57.5,27.6,57.4z"
                    />
                    <path
                      d="M40.4,58c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.5-0.1H39v0.9h0.8c0.2,0,0.3,0,0.4-0.1
			                C40.3,58.2,40.3,58.1,40.4,58z"
                    />
                    <path d="M33.2,57.3c0,0.2-0.1,0.4-0.2,0.5l-0.3,0.8h1l-0.3-0.8C33.3,57.6,33.3,57.5,33.2,57.3z" />
                    <path
                      d="M56.7,51.7c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.3-0.3,0.7-0.3,1.4s0.1,1.1,0.2,1.3c0.2,0.2,0.4,0.3,0.6,0.3
			                c0.2,0,0.4-0.1,0.6-0.3s0.2-0.7,0.2-1.3c0-0.7-0.1-1.1-0.2-1.3C57.1,51.8,56.9,51.7,56.7,51.7z"
                    />
                    <path
                      d="M41.7,54.6c0.1-0.1,0.2-0.3,0.3-0.5c0.1-0.2,0.1-0.5,0.1-0.8c0-0.4-0.1-0.8-0.2-1c-0.1-0.2-0.3-0.4-0.5-0.5
			                c-0.1-0.1-0.4-0.1-0.7-0.1h-0.9v3.1h0.9c0.3,0,0.5,0,0.6-0.1C41.5,54.8,41.6,54.7,41.7,54.6z"
                    />
                    <path
                      d="M71.6,2.3H6.8c-2.5,0-4.4,2-4.4,4.4v52.8c0,2.5,2,4.4,4.4,4.4h64.8c2.5,0,4.4-2,4.4-4.4V6.8C76,4.3,74,2.3,71.6,2.3z
                      M16,54.8c-0.1,0.2-0.3,0.3-0.5,0.5c-0.2,0.1-0.5,0.2-0.8,0.2c-0.4,0-0.7-0.1-0.9-0.2c-0.3-0.1-0.4-0.3-0.6-0.5
                      C13,54.6,13,54.3,13,54.1l0.5,0c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.5-0.1
                      c0.2-0.1,0.3-0.1,0.4-0.3s0.1-0.2,0.1-0.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.2-0.4-0.2c-0.1,0-0.4-0.1-0.7-0.2c-0.4-0.1-0.6-0.2-0.8-0.3
                      c-0.2-0.1-0.3-0.2-0.4-0.4s-0.1-0.3-0.1-0.5c0-0.2,0.1-0.4,0.2-0.6s0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.1,0.8-0.1c0.3,0,0.6,0,0.8,0.1
                      c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.2,0.2,0.4,0.2,0.6l-0.5,0c0-0.3-0.1-0.5-0.3-0.6s-0.4-0.2-0.7-0.2c-0.3,0-0.6,0.1-0.7,0.2
                      c-0.2,0.1-0.2,0.3-0.2,0.4c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.4,0.2,0.8,0.3c0.4,0.1,0.7,0.2,0.9,0.3c0.2,0.1,0.4,0.2,0.5,0.4
                      c0.1,0.2,0.2,0.4,0.2,0.6C16.2,54.4,16.2,54.7,16,54.8z M20.1,55.4H17v-4.1h3v0.5h-2.4V53h2.3v0.5h-2.3v1.4h2.5V55.4z M22.7,57.3
                      h-0.9v2.5h-0.4v-2.5h-0.9V57h2.2V57.3z M23.3,54.9v0.5h-2.6v-4.1h0.5v3.6H23.3z M25.3,59.8h-0.4v-1.3h-1.5v1.3h-0.4V57h0.4v1.2
                      h1.5V57h0.4V59.8z M26.8,53v0.5h-2.3v1.4h2.5v0.5H24v-4.1h3v0.5h-2.4V53H26.8z M28.3,59.2c-0.1,0.2-0.3,0.4-0.5,0.5
                      c-0.2,0.1-0.4,0.2-0.7,0.2c-0.3,0-0.5-0.1-0.7-0.2s-0.4-0.3-0.5-0.5c-0.1-0.2-0.2-0.5-0.2-0.7c0-0.5,0.1-0.8,0.4-1.1
                      c0.3-0.3,0.6-0.4,1-0.4c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.4,0.3,0.5,0.5s0.2,0.5,0.2,0.8C28.5,58.7,28.4,59,28.3,59.2z M27.9,54.4
                      c-0.1-0.3-0.2-0.7-0.2-1.1c0-0.4,0.1-0.8,0.2-1.1c0.2-0.3,0.4-0.6,0.7-0.7c0.3-0.2,0.6-0.2,1-0.2c0.4,0,0.8,0.1,1,0.3
                      c0.3,0.2,0.5,0.5,0.6,0.9l-0.5,0.1c-0.1-0.3-0.2-0.5-0.4-0.7s-0.4-0.2-0.7-0.2c-0.3,0-0.6,0.1-0.8,0.2s-0.4,0.4-0.4,0.6
                      s-0.1,0.5-0.1,0.8c0,0.3,0.1,0.7,0.2,0.9c0.1,0.3,0.3,0.5,0.5,0.6s0.4,0.2,0.7,0.2c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.4,0.4-0.8
                      l0.5,0.1c-0.1,0.4-0.3,0.8-0.6,1c-0.3,0.2-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.3S28,54.7,27.9,54.4z M31.6,59.8h-0.4v-2.4
                      l-0.8,2.4h-0.3l-0.8-2.4v2.4H29V57h0.6l0.7,2c0.1,0.2,0.1,0.3,0.1,0.4c0-0.1,0.1-0.3,0.1-0.5l0.7-2h0.5V59.8z M31.7,51.8v-0.5h3.3
                      v0.5h-1.4v3.6H33v-3.6H31.7z M34.1,59.8L33.8,59h-1.2l-0.3,0.9h-0.4L33,57h0.4l1.2,2.8H34.1z M36.9,59.5c-0.1,0.1-0.2,0.2-0.4,0.3
                      s-0.3,0.1-0.5,0.1c-0.3,0-0.5,0-0.6-0.1s-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.3-0.2-0.5l0.4,0c0,0.1,0.1,0.3,0.1,0.3
                      c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.2-0.2s0.1-0.2,0.1-0.2
                      c0-0.1,0-0.2-0.1-0.2s-0.1-0.1-0.3-0.2c-0.1,0-0.2-0.1-0.5-0.1c-0.3-0.1-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.2-0.3-0.3
                      s-0.1-0.2-0.1-0.4c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1c0.2,0,0.4,0,0.6,0.1
                      c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.1,0.3,0.1,0.4l-0.4,0c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.1-0.5-0.1c-0.2,0-0.4,0-0.5,0.1
                      c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.3,0.1,0.6,0.2c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.2,0.4,0.3
                      c0.1,0.1,0.1,0.2,0.1,0.4C37,59.2,36.9,59.3,36.9,59.5z M38.5,55.4h-3.1v-4.1h3v0.5H36V53h2.3v0.5H36v1.4h2.5V55.4z M40.6,59.8
                      l-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.4s-0.1-0.2-0.2-0.2c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.2,0H39v1.3h-0.4V57h1.2
                      c0.3,0,0.4,0,0.6,0.1c0.1,0.1,0.2,0.1,0.3,0.3c0.1,0.1,0.1,0.3,0.1,0.4c0,0.2-0.1,0.4-0.2,0.5s-0.3,0.2-0.6,0.3
                      c0.1,0,0.2,0.1,0.2,0.1c0.1,0.1,0.2,0.2,0.3,0.4l0.5,0.8H40.6z M39.3,55.4v-4.1h1.4c0.3,0,0.6,0,0.7,0.1c0.2,0.1,0.4,0.2,0.6,0.3
                      c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,1c0,0.3,0,0.6-0.1,0.8c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.2,0.3-0.4,0.4
                      c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4,0.1-0.7,0.1H39.3z M43.5,59.8h-2.1V57h2v0.3h-1.7v0.9h1.6v0.3h-1.6v1h1.7V59.8z M46.3,58.6
                      c0,0.3,0,0.5-0.1,0.7s-0.2,0.3-0.3,0.4c-0.2,0.1-0.4,0.2-0.7,0.2c-0.3,0-0.5,0-0.6-0.1c-0.2-0.1-0.3-0.2-0.4-0.4
                      c-0.1-0.2-0.1-0.4-0.1-0.7V57h0.4v1.6c0,0.2,0,0.4,0.1,0.5s0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.6-0.2
                      c0.1-0.1,0.2-0.4,0.2-0.7V57h0.4V58.6z M45.1,55.4v-4.1h0.5v4.1H45.1z M48.9,57.3H48v2.5h-0.4v-2.5h-0.9V57h2.2V57.3z M46.6,55.4
                      v-4.1h0.6l2.2,3.2v-3.2h0.5v4.1h-0.6l-2.2-3.2v3.2H46.6z M51.4,59.8h-2.1V57h2v0.3h-1.7v0.9h1.6v0.3h-1.6v1h1.7V59.8z M53.9,59.8
                      l-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.4s-0.1-0.2-0.2-0.2c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.2,0h-0.4v1.3h-0.4V57h1.2
                      c0.3,0,0.4,0,0.6,0.1c0.1,0.1,0.2,0.1,0.3,0.3c0.1,0.1,0.1,0.3,0.1,0.4c0,0.2-0.1,0.4-0.2,0.5s-0.3,0.2-0.6,0.3
                      c0.1,0,0.2,0.1,0.2,0.1c0.1,0.1,0.2,0.2,0.3,0.4l0.5,0.8H53.9z M54.1,51.9c-0.1-0.1-0.3-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2
                      c-0.1,0.1-0.2,0.3-0.2,0.6l-0.5-0.1c0-0.4,0.2-0.7,0.4-0.9c0.2-0.2,0.5-0.3,0.9-0.3c0.4,0,0.7,0.1,0.9,0.3
                      c0.2,0.2,0.3,0.5,0.3,0.8c0,0.2,0,0.3-0.1,0.5c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.2-0.4,0.4-0.8,0.7c-0.3,0.3-0.5,0.4-0.6,0.5
                      c-0.1,0.1-0.2,0.2-0.2,0.3h2v0.5h-2.7c0-0.1,0-0.2,0.1-0.4c0.1-0.2,0.2-0.4,0.3-0.5s0.4-0.4,0.7-0.6c0.4-0.4,0.7-0.7,0.9-0.9
                      s0.2-0.4,0.2-0.6C54.3,52.2,54.2,52,54.1,51.9z M56.8,59.5c-0.1,0.1-0.2,0.2-0.4,0.3s-0.3,0.1-0.5,0.1c-0.3,0-0.5,0-0.6-0.1
                      s-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.3-0.2-0.5l0.4,0c0,0.1,0.1,0.3,0.1,0.3c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.1
                      c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.2-0.2s0.1-0.2,0.1-0.2c0-0.1,0-0.2-0.1-0.2s-0.1-0.1-0.3-0.2c-0.1,0-0.2-0.1-0.5-0.1
                      c-0.3-0.1-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.2-0.3-0.3s-0.1-0.2-0.1-0.4c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.4-0.3
                      c0.2-0.1,0.3-0.1,0.5-0.1c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.1,0.3,0.1,0.4l-0.4,0c0-0.2-0.1-0.3-0.2-0.4
                      s-0.3-0.1-0.5-0.1c-0.2,0-0.4,0-0.5,0.1c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.3,0.1,0.6,0.2
                      c0.3,0.1,0.5,0.1,0.6,0.2c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.1,0.2,0.1,0.4C56.9,59.2,56.8,59.3,56.8,59.5z M57.9,54.5
                      c-0.1,0.3-0.2,0.5-0.4,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.4,0-0.7-0.1-0.9-0.4c-0.3-0.3-0.4-0.9-0.4-1.7c0-0.5,0-0.9,0.1-1.2
                      c0.1-0.3,0.2-0.5,0.4-0.7s0.4-0.2,0.7-0.2c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.3,0.2,0.4,0.4s0.2,0.4,0.3,0.6s0.1,0.6,0.1,1
                      C58,53.8,58,54.2,57.9,54.5z M60.4,55.4h-0.5v-3.2c-0.1,0.1-0.3,0.2-0.5,0.3s-0.4,0.2-0.5,0.3v-0.5c0.3-0.1,0.5-0.3,0.7-0.5
                      c0.2-0.2,0.4-0.4,0.4-0.5h0.3V55.4z M64.4,51.7c-0.3,0.3-0.5,0.6-0.8,1.1c-0.3,0.5-0.5,0.9-0.6,1.4c-0.1,0.3-0.2,0.7-0.2,1.1h-0.5
                      c0-0.3,0.1-0.7,0.2-1.2c0.1-0.5,0.3-0.9,0.5-1.3c0.2-0.4,0.5-0.8,0.7-1.1h-2v-0.5h2.7V51.7z M75,46.9H3.4V6.8
                      c0-1.9,1.5-3.4,3.4-3.4h64.8c1.9,0,3.4,1.5,3.4,3.4V46.9z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.footinfo}>
            <div>
              <p> PHONE: 601.898.9887</p>
            </div>
            <div>
              <p> FAX: 601.898.9860</p>
            </div>
            <div>
              <p> EMAIL: kadcock@adcocklawgroup.com</p>
            </div>
            <div>
              <p style={{ margin: "0" }}>
                RIDGELAND OFFICE: 795 WOODLANDS PARKWAY, SUITE 220
              </p>
            </div>
            <div>
              <p style={{ margin: "0" }}>
                POST OFFICE BOX 3308 RIDGELAND. MISSISSIPPI 39157
              </p>
            </div>
            <div>
              <p className={styles.bottomText}>
                &#169;2022 Adcock & Ivison, PLLC, All Rights Reserved,
                Disclaimer. | Site Designed, Developed and Brought to Life by
                <a href="https://liquid-creative.com" target={"_blank"}>
                  {" "}
                  Liquid Creative
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerright}>
          <div>
            <p
              style={{
                color: "#81817b",
              }}
            >
              LATEST CASE STUDIES
            </p>
          </div>
          <div>
            <ul>
              <li>CONSTRUCTION ACCIDENTS</li>
              <li>OILFIELD ACCIDENTS</li>
              <li>PHARMACEUTICAL CASES</li>
              <li>INSURANCE LAW</li>
              <li>BUSINESS V. BUSINESS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
