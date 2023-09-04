import React, { useState } from "react";
import axios from "axios";

const TelegramForm = () => {
  const TOKEN = "6673147008:AAEv7UyST7R9AmQJWWt4bOlMAehrK6Akck4";
  const CHAT_ID = "-1001779671235";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    let message = `<b>Заявка сайта</b>\n`;
    message += `<b>Имя отправителя:</b> ${name}\n`;
    message += `<b>Почта:</b> ${email}\n`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {
        console.log("Сообщение успешно отправлено:", response.data);
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке запроса:", error);
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">отправить</button>
      </form>
    </div>
  );
};

export default TelegramForm;
