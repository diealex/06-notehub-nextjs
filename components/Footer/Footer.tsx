import css from "./Footer.module.css";

export default function Notes() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>&copy; {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Alex</p>
          <p>
            Contact us:
            <a href="<mailto:student@notehub.app>">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
