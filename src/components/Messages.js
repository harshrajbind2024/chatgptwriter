import React, { useState } from "react";
import TabBar from "./TabBar";
import ChatInput from "./ChatInput";

const users = [
  {
    id: 1,
    name: "bhanu singh",
    url: "data:image/jpeg;base64,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",
    lastMessage:
      "My background includes MERN STACK, which aligns with the job requirements. I am excited about the opportunity to bring my skills and passion to WEB DEVELOPMENT Company and contribute to its success. ",
  },
  {
    id: 2,
    name: "shiv Smith",
    url: "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
    lastMessage:
      "Hi there HARSHRAJ! I am Rathina. I’m the Co-Founder of Crio.Do, and an ex Product Leader from Flipkart. Your background as your job title at your company caught my attention and wanted to discuss Crio and ways to accelerate your career in QA Automation. If you’re an aspiring QA Automation Engineer, then the McKinsey Global report has good news for you! As per the report, the IT industry will have 65 million new jobs by 2025, with lots of opportunities for QA Automation Engineers! How great is that? But companies recruiting for this role are looking for skilled candidates and experience!",
  },
  {
    id: 3,
    name: "Pooja Somaiya ",
    url: "https://media.licdn.com/dms/image/v2/D4D03AQHZvNny7KK7xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713521288636?e=1732752000&v=beta&t=K8TME6drvAYrb_MhJ6N_-J5dmPGbtdJKTtXjSmOksp4",
    lastMessage:
      "My background includes MERN STACK, which aligns with the job requirements. I am excited about the opportunity to bring my skills and passion to WEB DEVELOPMENT Company and contribute to its success. ",
  },
  {
    id: 4,
    name: "Sridher Jeyachandran ",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HY1jhhu822jZ0xl27sNa1TdVjSREfT-YCA&s",
    lastMessage:
      "Your background as your job title at your company caught my attention and wanted to discuss Crio and ways to accelerate your career in QA Automation. With changing user expectations and rapid digital transformations, software testing is evolving. It’s more than just finding bugs. It’s about testing product ideas, evaluating user expectations and being on the lookout for improvement opportunities! This is why we launched our Fellowship Program in QA Automation (SDET), India’s only QA Automation Program with Real Work Experience and guaranteed placement. At Crio’s you will learn to Architect tests for AirBnB-like, Flipkart-like apps to master API Testing, DevOps, Selenium with Java & impress recruiters to land great jobs. ✅ Build modern work-like professional projects to master in-demand QA Automation tools & frameworks with focus on Web UI Testing, API Testing, Performance Testing, Microservices Testing, DevOps, Selenium, and more. No boring videos, endless lectures, and lengthy tutorials. ✅ Get Mentored by industry experts on how to build strong Github profile to get into product-based companies. ✅ Receive 100% job referral guarantee with job-search support, referrals, and career guidance. I would like to personally invite you to experience our revolutionary way of learning tech. Book your free trial, and explore the best automation testing practices to become a successful QA Automation Engineer! Happy learning!",
  },
  {
    id: 5,
    name: "Varun Tiwari ",
    url: "data:image/jpeg;base64,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",
    lastMessage:
      "I am impressed with your experience as your job title in your company and I wanted to discuss Crio with you. Your profile stood out to me and I believe you have the potential to take your career to greater heights with Crio’s ‘Fellowship Program in QA Automation (SDET)’. World quality report says that automation testing has replaced 50% or more of manual testing efforts in the last couple of years. More and more companies are adopting automation testing approaches, leading to higher demand for QA Automation Engineers.",
  },
  {
    id: 6,
    name: "Rathinamurthy  ",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s",
    lastMessage:
      "My background includes MERN STACK, which aligns with the job requirements. I am excited about the opportunity to bring my skills and passion to WEB DEVELOPMENT Company and contribute to its success. ",
  },
];

const conversations = {
  1: [
    {
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBoYFxgXGBUXFxcXFxoYGhsYFxcYHSggGBolHRgaITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQFy0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLTUtLS0tLS0tNy0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYHAAj/xABDEAABAwIDBAgEBAQEBAcAAAABAAIRAyEEEjEFQVFhBhMicYGRofAHMrHRQlLB4RQjcvEzYoKiQ7LS4hckNFNUg5L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAAlEQEBAAMAAgEEAgMBAAAAAAAAAQIDESExEgQTQVEiMmFxkSP/2gAMAwEAAhEDEQA/ANIHeCcH8k9L4LN2GXqBiq17NJMg2Eq0SgKKhU6z4+Q90t+6IM5HyxykKUAngIiJTYRu38UcAp4ImPdk4lAIJ7Ql36p7SgaAvQnzyXigG5h4ofVeKO6yfCAQYlhEjRNaLoGtYdUvVogO5IqB9UEpojgnSlKAb6DTqhNwQAytOUcgO9SAllQRv4WPxHhu+ye7Dgo6UBXgodsbHrVIFOsWsNnN0tvMi7rblUf+HTP/AJNX/wDVX/rW3hLCnDqum6c1BpOJgkQd44HgjMCo8AnOalhL3oPBqUNSQlaTvQeXi3miZZmLp7aep9hAEATp6IjGp4ZAtqOKKAFADIn9XonGoL3FkrTOkacj5IBliQAqSGylLEEdwQxr5qRUbuQWjtKj0JHhPcEoCATXTdeTnWSlunvj91AwpR6JXNnReNPUTG7zQJuTgmmnp6IkIEATpXsv3SwVRXQNZjelya+i8G7iiNbaygRgt+nqly2TovN50TsoPv3wQJ1aK1kp4YiRvlUMY0eaeWwJNllukvTbC4QOGYVawsKbHAuB5n8K5PtvphjsY4y97WXd1dMljQOZEF1uJ8lZEdW2/wBPMJQd1YcKlSdGxAJ/M428Fisd8Q8Rm/luosb/AFg28RcdxjmsI/E1Gxny9zm5gd8Q4ET+yOKlPEOksDIgHIQ2wtIF9wmw8leKt8Z0pxNd3axBZEjsEtaQeLgAB5ptLaW0KAFRtWqAN8Z2C5sZlp5zdVNSmGWYQ4B1pBa5pOmfc5u6Y7oU7ZrZzDKaTwPzGHQLdmpLY9eChGy2L8WSCG4mlO6aR18HG9ua6ZsPblDFsz0XhwuCNCCNQWm4PIr5+r4brKHWtYwObOYN7JsTJNPjEEEFRNh7crYar1tF0alzZ7Lgbab/ANk4Ppmqzeo7Wdrw+yruj3Sehi2dh4LhqJ7lcMbfwXIY5q8GouVNI5KgVQJhOnjuRSPfqmgcR+qgZk193XqiL7+iaWIGgpwakDU5m7371QeanZV4jfvSQUEANsiBqaG+/fcnxyQKymbzf7fdecw6D3xSskn3fu4KRTCBWN/ZYD4n9LP4Vgw1Fw66oLn/ANthtJ/zE6effqOlPSBuDwzqxAnRoO9xmNF847Rx761R9Wo4uqPdLid/2iwA4BdSJQy85pJJdMzMyfqbpeuf8xk8Ju3yNkVtWxLzMCGiTbnZBFRv5fUrpCNrH+1vQaqxwGDbVlr8rHWIJDgfKQOehVZUnWIG73vWj6PPFZnVFgNRt2OmHRrAO6NZHjaUWH0GlofTqhuakBc3D6d9+paCQeQnmnUS0Np1AXECWzrkl3yn1InlEoWJxZa9ry0kg5Xi4sBYmNCQe7WLdlRRXFMlze1Rf8zbS3uGgI3bjpwJ5dCYqr2nns9pmUAwZ3tdmHAgX4HcqYGDJ19+asq+GLngNMg3EG8cpPDdKhYuhBMuBItYD1iw/ZJUsqx2Bth1CoSzM0lscYeXNvG4W05eC+gujO26eKZmYdALQQvmRjyDLZB/yk6fWF1j4P7RYxwpkw5xjKTe4b2otrAE8I4JYR14hDLVKLUJzVAAhDhSHNQ4UAyE2q8AE7hqimneUjqaAQCMAgClzRmSLHwQeDNE6ClB5heyH3KCFCVreGqQDh5ojHDiqPNpmOaKWWgIfWBK1/h38UHLvjriSGYWlNiXvI3y0AA/7nea5DC6v8dcOc2GqSIyvZzzSHeS5W5sRPCfPRdT05pkqZhsA9wzNEiY3WPA8EGi0TefTXnfRavZGBAZJLQd2UgjXfMk3GgS1ZEHBYRo7FZjgHA3Bi/cREjwUqls51Ah1PLVb8wa7sPtMOY4GWO+u7VBxbTmLrNJ4ECe9pBB04FG2XsmriXimyWibwXBt9+TQT3Bc3LkaTG30r9oYsVSXdoO0M2Pc5v2tvsVEw1N85RJBsYkiOYXV9n/AAzBjM6ee/zWswPQXDsAlrTB4D9VhfqP1G80fuuX7J6OVXtDAHCRZ8XA3geZ3KP0u6HOoMLmElu+fC/vgu30dm06chrY/ZVm2sEKjHNIkEFeb7+Uy63+zjcePmx5PMeJ04TwWg6BbV6jFUyRZzgLBpMzA1Ei/A/VM2ts0sL2gaOcBxMHvuIAVbgXFjswFxcE8tw9/VfRmUyj5+WNxr6xpOloPESvEKp6LV+sw1J+aZaN5IPcrYtHd3KJwwsTSxPcUkoGFq8WpXVAkLuCgQNS5EhqhPCAYpDgl8PRESZkFU6iPc9yccO08fMp5YCL96IVeAYozaSOMa+e5KcMM2YzYQLn6IrUUt4pwc8+M+zM+AFRo/wqjXGPyulp8pC4abwvpbpzh+s2dim5cx6pxA5tGYR5L5qcN66iVL2d1V+snlAkeN5hXWHxtR4DG5cu4fqDqFV08MMgPFWmwaYzgLHZnydjfXh28q92dsRz4tqbn3qt/sXZLKIEC+8oGyqdhFrK4aDNyvDdlyfQmuY+lrga91a57LOUakFWdPEEqyuMsUioVAqi6e96jvrCVlk7xjnvTzZDS4njfTjqsA/DxMN01ExaRv46EHdK7F0q2e6rTlkZmzC5Pi8Q7MWPbDrg7omx99y9n0+fjjy/UYfl2/4ZunZ9G8w2J9haohZH4VkfwDYn5n6xB7REiOOq1xC9Tx0IsSFvvyRCP0CTL799yAZYvZU+Pfivd6AZppGsg2RYSwpQMhD6vkpLWXSoKlv905o98kkSiDyVCU26zxUgBBAv9f0R2lAOvgw9jmfhcCCOREL5d6U7LdhsXWokEZXnLO9hPZPlC+qxVA14rl/x26OZqNPGMbJpnJUiPkdo49zoH+pJfI5RhKk0+5S9lPOcEKFgaf8ALnv9F7DbUbTmBmJ0WWePe8ejDKTnXWtgYqYWosRZcd2d0qcyJouA5XjzC2myultN0AmNLHVeO67j7e6bMc/TTB10TH7fw+GaHVqgbbSbk8hqUPBs65pc26x3S5vUuzFgLuJvpuHBSci2dWNTp9UrkjDYWo/g5wht+ZiFOw+G2i4B7upZ/lcDpI3g6wsE7a2Oo9U9rf5bnQerbnqAW3XAJGlvstrg6u0Qyk9zi8PJzse1jHUxmOX5bO7MEjvutcsf495GGOX8vj2r3DNqZe2ADy0XOviDgctZtRo+cRb8wt6yLrrmEpEtlwAMafusT8QMDmoZt9N2Ycljrvxzla5z5YWL7Z2DfgcKCzrXhgLoBAH5nSLA7+a1+FxIqU2vbo4B3mqLZu0xWpBtRuUOALYJMteJafEFTOiWGNPDimf+G57BP5WugegC9GnO/LnfbH6jDH7fecsv/ZVoNT4fqlITy39PRJlXrfPDczQ816BKIOKaRogbCQlP9/RMc1KsE3rySjTgRfxTurUFQ1PDUwFGaqEY1Fa1I1PBQFpt3Ku6YVqbMDiXVWGpT6p+Zg1cCIgcNdd2qsqYQ9qUS+jVYAJcxzROlwQor5fwdKaBaOLhfXWfoiYGszDkZWBzzpO5R8DmDarHAhwuQdQQcrp5ghDw7nZgRru/ZZ5T31vj49NZsXGYjEVzRr0zBIALWdhontOcbSMsxBmfI0nS3ZDsJVs6QbtItadIknh5rXbBFXL2iBbdJd5lZnpo/NUA3DjvWWGyXLkjfPXZj3vXTfhZtIvogG5j6K+6R7IFdhbF9QY0KwfwdxdyzgfqutVXiV58py1t31f8OdbP6M1WOE1NDN2ytbg6DRGdxc7yHkp+LLULBUxmT/Dq3s7U+k22iodu4UOa5puCLjvWqc2yodrmxJU2Y8Z68u1V7DpGpSwoaexRa5jiZuWuhrL6wN62GBZDTzcSsj8PqhJxFK/ZqTy7Qm3DRbdrI7l6dGu/K5PP9Rt7Pga8AX3LzQnuCRgNvXvXreM0pAEp5J0IA5bQnZE8rwClUoCVKAvQgoQjMQGlFpKoM1FaENgujNQEotTqgS0gvVAorgfxM2J/DbULgIp4lpeNwzH/ABAOecZv/sVHsctLsj2ixhd3+ImwWYvAvBHbpfzabt7XN1jvEiF8/wCGqkOD9Lw7kRr6rLbj2N9OXK6jgME0sB5LnHTgRUgcYW7wG1B1XguedJq+asHawSSO9eTTP5Pduv8ABp/hoDTdPG5XZH02lgc5wAiV847J6Q1KNX+UwFptDrHvkTC6EellAUmU8WG1SRmyxmZG6x+YrTLXe+fy4xzxuM5fToFakwiGuDu4yorS+mb3CyWC6dYOgMtOkKbTeGtABnUiNVLw/wAQKTnQRY8vqs7rv4d/cnrraU8fIVJt/Gfy3JKO0qbqfXMIi1u/csb012yHHqmnfNuVh+vkuJLb5S8k7Fx8Ksb/AOer05JD2ZhwljgI8nE+C6vC4l8FO3jqjvy0SPHOPqLruEL6WE5Hzdl7laZlSBqevErpwEGr0IkLxCAZC8zeiEJGsiVFIAmSeH1RYS5UGZaUemUBg4wj0miydEhgRW8kJsIzSNbJ0HppzmymtIRWQgHXZmY4EWIIPcdV8wdIcM7C4ytSdpnJG7U+l5X1OAuMfHLosQ4Y2mCQYa8C99AfUeXJLOxZeViKW0oZruVJj8SDBEEnQb9Tc+XqFDpYi0blJ2dh3O/mAABrcoPMEEkg+Kyx1zG21vltyy5IJsTDPc7MTYXAPO+nCy29XDYKowNqMearGm5MCTqezf0WN2Vh3l8uObvMDugarpuyn0xTbakwbzYLjZl59vX9Nrw+Pai4DYuZmZtBpbGUOqDKNIgA338FEx3w/wAS9pr0urDm/KwBwzRebmDytxW42RtKlVIY054JsB2QVqD2WSeCy+dnp3tmFnOOP7Be5mCdnlpFSSL2ym4HC4WRr4suLnG5cZE68bclo+m+0Ays6k2wcSSN1yT4i581ldn4N+Jr9TTBzuhvcCYLuFgCfLeVphj3uVeXZnzxHWPgFs2WV8URAc7q2GZzAXJ8D6ly62qDoZs9mGoDDsHZpgAc+J8xPitBC9OGUynY8mePxvKSF6EoCWF04NhJ4J0JUDJXgnwkhOKSF6E6F6EGWaEem39UESpNILlRm9yM0JjBZGbrCAjAjNCYwIrGwqHAKPtLAMr0n0qglrwQePeOBGo7lJaqjpJ0owuBpl+IqtaYJawXqP5MYLnv0G8hWI+b/iD0LrbPrxGam6crxo6L3t2TG7yVDg8WRxuPMTvWz6b/ABSr7QHUMpsoUJk2FSqRze4Q3/SAeZ34N9EiwuNRyHuFLJfC42zy0OBaZgaGJ8rfVaPCbADmXJ3E+Hf7sspszHNaL5pmL8OyJPi423ADWVc4bpQ4DKNJI4WG+0wvLnhnL4e3Xtws8uq9FcHQoMBbGkzr71U/pJ0hp0qcBwzEfWdOJsuOVOllQNIad24GYmf2VZj9uOrnKHF0CQZEnW0Ei1yVMdVq57cQtr43raoc49oZTvJcCYMHWeXJdN+Gux30Wuc8fzHEXcCbWMN4gXueKoehPQypWcMRVaWta6abSImDOcg6XgjhC67Rwot79Fd2ck+McasL/ajU8WaRz5cwiCNDHEK2wu0qb9HDmDYjzVXVZIUR+CBGixw3ZYePcd56sc/PqtUw2kGQlXJOlmzRhA3EYYuoVS7IeqJYHggm7WwJka96P0Y+JFRgLMW11QB0dY0AOAgntDR2nI96+jq/9cPli8OzH4ZcrqgSqv2PtrD4puahVbUG8D5h3tNwrFXjki9CVeQJC9CVeUGXYfr9fZUmmozYsfH6qXh2nQx4c+S5dD02ackdrU1jVXbc6SYXBtzYis1nBsy93IMbLj5QguWtVT0j6WYPAtzYms1pIlrB2qjv6WC8czbmuRdLvjPWqA08Cw0G6da+DVP9LbtZ33PcuV1az6r3VKjnPc4yXOJLnHi4m5Xcxc2up9KvjTXqAtwbP4du57sr6xHGLsp/7jwIXKsZi6lV7qlV7nvdq5zi5x7yboT7lIQuuJ16lqpbTMKGDBUuiFnm0wPOFMOi8i3IyDPPQjxQ+ocb3DtIVxgaUqbW2W8jMBIWP3eeG32e+UDYPR813gOrBnLUwur9GegWFpObVIzPAHGJF5A3X+izXRLB0x2nCHc5XT9mVBltdY57cr+W2OrGTvE6jSAAAEAKUwIDHqSwLBpaeIGvd52CLSpaodWhmaW8R5cCsb0s6UGnQ6gO/m3FVwnsgWyjiXBbadV2XkYbNkxnVH8QukIquFGj2g12usuuMw5CYHEnuWSqjLEQA27iPxHiSL6o1Fsy867p3D7pz2yDZfd1asdePxj5mzZc72m4aq5jw+m57XjQgxfvat3sX4kVWQ2u0VRvI7Dx+jvTvXPgTx0RKdQDvjz8F1lhMvbmZWO97F6R4bFAdVUBd+R1nj/SdfCQrdfOLMzXAtO+ZEz6aeBWz2L8QcRRIbWHXU+JMPA/q3+Mrz56LPTSbP262vLP7M6Z4OtAFXI46NqDJ5OPZPgVfda38w8wsLLPbTrP06aznTbptS2c1oy9bXdBbSDssN3ve4A5RYgWknlJHum/S9mApiAH13g9Ww7osXvjRg4anTiRwvEYt1V761UmpVqO7TjvkbgOEQBoAITXr+Xmrlnxeba+Im0cRrWNGmdKdEGnbm/5/Udyy7qRMudN7knUniSdTzKscPh97tPcBAxDS88GjVeqa5GPz6qjTzG2iWq3KFaYbD6xpuVbtIXhc5Y8nVmXbxGpDUpaY3qS3Dw2SkwtGWyuJjXXyRWtlS8AQHAPs06HcO/kvYehJhWVDB8r89NfRPtfKH3PjexqdkbIywTccePdxWro4EObELAbK2jVoGGXaNabrt/0nVn0Wx2L0to6VGvpnfbOB4tv6LwbfpNmN7PMe/V9Vrs5fCww2ycrtFd4Z2Wybh9s4RwkV6fiS36puJ2thW/8en4Ok+mqw+1n+q2+5h+4t8E+SrhhgSVgD00oU/8ADDqp3WyN8zf0VLtbpPXxPZmGH8DZDYHE6uW2r6PZl7nIw2/U4Y+r1ruk3TINDqeHILtHVPwt/p4nmudVyXGXGbzzJ4nnf3ucTx7R/wBo9++CE4ST9uH6L62nTjrnI+ds2XO9ogdY6nyRqY7Om7u3KI/3dWDWw2Du8lszQQyb39d6h1HkH3CsKThPd6e7IO0aEMJHv91QXDuzALzqd5M9/wB1C2fiD5+7K1dETbxQCYBEEgjduI9+wvfwreHqkJI7uf6J3Xd3mfsnBkts7UqYmq+tUMueZPADc1o3ACw+8oGCZvPEeFnINK4KmYRk5o4A+o+6xwxdZUVwLj/l+qWvYBo3o1VoEAd3io2Ebmq8m6rTjhO6kBuv0WfbS6ytA0CvNp4rKwnTeg9G8JYvOpuucp2yOsfE6LjsDlp+yo+yMMDTNphTtr1LIWxGxRJV5/JPwh0GQ60WUxlHX91GY28+Hv3vVrSojLP7+CsEGCO/vFvRGpxvE933T3tTaZv9AnAcM5mPC3JeDBxPp9k5zY+wSMZPHj+qBaWUbp4zJt9+5TqdUu+0cFXFwB3/AHVhgQCJKoSrI3j6JtIW70LGyIG+ef3Rohtvfig8ZzAX8Z3Kyb8h/sqmie177t6t6TpbGunuUFVo8jXePDmp+JoyxV2MJY+SLfurqg0PYEGZxOFdTu2YFz6Ky2Zjg8QFLdTk8d25UGNp/wAPWDwOw7yBNkF5j6YI4CLnTw71Xfx7PyuU+qMzIB+ZzR5kNPoVb9UPyN8/+1LTjlmfLDt2/uV5s6lrG9p+k/oqN4mi7lcK86PulrDuP6rPD2uXpGxdSA48ETZTctLOfxy4925QtrAl7aQ/E6D4aqbtWuGNDdw3egAXXfP+nP4QcSTWqNpDeZdyA9+i0zWhgAGgA3EfRV2xMCWNNR/zP15C1kSrWmY328Qrj+6t/SFtit2eein4Wjlw4GiqsbTJyjmr7SmNLCBok9p+Fd1UnkCrdrLRw8VXYQS4wPsrem3v9UVXVAN/v7pmGF4CPimmTblvXtks1nzVC1BA1Rm0fom1WXIPgi0nDSUFTXd247vf0WioUwGDzWbqGaoA3laXEQGRy38lBTB01Z4dylYqpAhQsGJk7yfTzRMU+4HDvVEjDNE3Hvkp+FeL/RRKTOz/AH+yNs/Xf/fvQLtHCZgYHai2/wB6JNk14gd1lNd844RzKq8Q3JX5H391Bb4inBzDQqu2thuspPbF9bcrhWnXZDDvlPp5Ja1AZbXBGoVGe6O4nMymNYeBF9wJ/RaX+IPD1CyPRth65w3Cof8AletN1g5KSLXNqoAzR8rgZHAnf3Kd0YqE043tJ+6ggQ4jdGiP0V/H3/os8f7Rb/Wi1P8A1pdua3N5/wB17Z9E1qhqO+Rp7M7+aFtQ9uqd5pt9XQfRWFTs0wG2AG7uVntL6HxeLzOyjQalBp6ju7/FQ8PpO+R9Qp9Adrx/QrvqGOp5ni28e/NWeIPZgbhN+PNRaXHuRC63gVYhdmi5P1urIiAoOBtPh9SplcdkHmgj4ht5le2W3XXTlZPr6IWz3mSinV5k3Pp9kB1UwRv5otc6+94UMns+aBuy2l+JJvDYNuSuNr1bZRqoHRhol5RtoH+YRwbZSLUfDiN3BNqfMDO/xRmi6bFx3qosQAAL++SLgzB193QM1/D7J+FMke+H3UExsZ/VBx9KSDOhUmjqffBFrNEIH9WHtGYSqbEYt2GqsDjNGocpn8Ljp4a+it8OeyPFU/S5gOFqEjQT4giCl9dPyTZmF6vE1twLsw1uCxylS3iFC2TXc7D03Ey7q9d9mOWX6135neZQf//Z",

      sender: "bhanu singh",
      message:
        "My background includes MERN STACK, which aligns with the job requirements. I am excited about the opportunity to bring my skills and passion to WEB DEVELOPMENT Company and contribute to its success.",
    },
  ],
  2: [
    {
      sender: "shiv Smith",
      url: "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",

      message:
        "Hi there HARSHRAJ! I am Rathina. I’m the Co-Founder of Crio.Do, and an ex Product Leader from Flipkart. Your background as your job title at your company caught my attention and wanted to discuss Crio and ways to accelerate your career in QA Automation. If you’re an aspiring QA Automation Engineer, then the McKinsey Global report has good news for you! As per the report, the IT industry will have 65 million new jobs by 2025, with lots of opportunities for QA Automation Engineers! How great is that? But companies recruiting for this role are looking for skilled candidates and experience!",
    },
  ],
  3: [
    {
      sender: "Pooja Somaiya",
      url: "https://media.licdn.com/dms/image/v2/D4D03AQHZvNny7KK7xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713521288636?e=1732752000&v=beta&t=K8TME6drvAYrb_MhJ6N_-J5dmPGbtdJKTtXjSmOksp4",

      message:
        "My background includes MERN STACK, which aligns with the job requirements. I am excited about the opportunity to bring my skills and passion to WEB DEVELOPMENT Company and contribute to its success",
    },
  ],
  4: [
    {
      sender: "Sridher Jeyachandran",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HY1jhhu822jZ0xl27sNa1TdVjSREfT-YCA&s",

      message:
        "Your background as your job title at your company caught my attention and wanted to discuss Crio and ways to accelerate your career in QA Automation. With changing user expectations and rapid digital transformations, software testing is evolving. It’s more than just finding bugs. It’s about testing product ideas, evaluating user expectations and being on the lookout for improvement opportunities! This is why we launched our Fellowship Program in QA Automation (SDET), India’s only QA Automation Program with Real Work Experience and guaranteed placement. At Crio’s you will learn to Architect tests for AirBnB-like, Flipkart-like apps to master API Testing, DevOps, Selenium with Java & impress recruiters to land great jobs. ✅ Build modern work-like professional projects to master in-demand QA Automation tools & frameworks with focus on Web UI Testing, API Testing, Performance Testing, Microservices Testing, DevOps, Selenium, and more. No boring videos, endless lectures, and lengthy tutorials. ✅ Get Mentored by industry experts on how to build strong Github profile to get into product-based companies. ✅ Receive 100% job referral guarantee with job-search support, referrals, and career guidance. I would like to personally invite you to experience our revolutionary way of learning tech. Book your free trial, and explore the best automation testing practices to become a successful QA Automation Engineer! Happy learning!",
    },
  ],
  5: [
    {
      sender: "Varun Tiwari",
          url: "data:image/jpeg;base64,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",

      message:
        "I am impressed with your experience as your job title in your company and I wanted to discuss Crio with you. Your profile stood out to me and I believe you have the potential to take your career to greater heights with Crio’s ‘Fellowship Program in QA Automation (SDET)’. World quality report says that automation testing has replaced 50% or more of manual testing efforts in the last couple of years. More and more companies are adopting automation testing approaches, leading to higher demand for QA Automation Engineers.",
    },
  ],
  6: [
    {
      sender: "Rathinamurthy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s",

      message:
        "My background includes MERN STACK, which aligns with the job requirements. I am excited about the opportunity to bring my skills and passion to WEB DEVELOPMENT Company and contribute to its success.",
    },
  ],
};

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(conversations);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatHistory({
      ...chatHistory,
      [selectedUser]: [...chatHistory[selectedUser], { sender: "Me", message }],
    });
    setMessage("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">
          Messages
          {/* <input type='search'placeholder='   search message'/> */}
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none w-64"
          />
        </h2>
        <TabBar />

        <ul className=" overflow-y-scroll h-600  max-h-50">
          {users.map((user) => (
            <li
              key={user.id}
              className={`p-4 mb-2 rounded-lg cursor-pointer ${
                selectedUser === user.id ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => setSelectedUser(user.id)}
            >
              <p className="font-bold">
                <span>
                  <img
                    src={user.url} // Replace with user's profile picture
                    alt="User"
                    className="h-10 w-10 rounded-full"
                  />
                </span>
                <span>{user.name}</span>
              </p>
              {/* <p className="text-sm text-gray-500">{user.lastMessage}</p> */}
              <p className="mt-2 text-black">
                {user.lastMessage.length > 50
                  ? user.lastMessage.substring(0, 100) + "..."
                  : {
                      /* (user.lastMessage.substr(0,50)) + "..." : */
                    }(user.lastMessage)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 bg-white p-4 flex flex-col">
        {selectedUser ? (
          <>
            <div className="flex-grow overflow-y-auto h-400">
              {chatHistory[selectedUser].map((chat, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    chat.sender === "Me" ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className={`inline-block p-2 rounded-lg ${
                      chat.sender === "Me"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    <img
                      src={chat.url} // Replace with user's profile picture
                      alt="User"
                      className="h-10 w-10 rounded-full"
                    />
                    <strong>
                      {chat.sender}:
                      <br />
                    </strong>
                    {chat.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="mt-4">
              <div className="flex">
                <ChatInput />
                {/* <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                  placeholder="Type a message..."
                /> */}
                {/* <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                >
                  Send
                </button> */}
              </div>
            </div>
          </>
        ) : (
          <p>Select a user to start a conversation</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
