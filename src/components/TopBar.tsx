export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-grid">
        <div className="top-contact">
          <span>
            <svg className="top-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.2 2 2.5 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.7 2.4z" />
            </svg>
            +91 0000000000
          </span>
          <span>
            <svg className="top-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 8 8-6H4l8 6zm-3.1-.5L4 16.2V17h16v-.8l-4.9-3.7-2.5 1.9c-.4.3-.9.3-1.2 0l-2.5-1.9z" />
            </svg>
            support@NegilaSene.com
          </span>
        </div>
        <div className="top-offer">
          <span>
            <svg className="top-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h12c.6 0 1 .4 1 1v3h3.2c.3 0 .6.1.8.4l2.8 3.6c.1.2.2.4.2.6V18c0 .6-.4 1-1 1h-1.1c-.4 1.2-1.5 2-2.9 2s-2.5-.8-2.9-2H9.9C9.5 20.2 8.4 21 7 21s-2.5-.8-2.9-2H3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm13 6v4h5l-2.3-3.1c-.1-.1-.2-.1-.3-.1H16V10zM7 19.2c.7 0 1.2-.5 1.2-1.2S7.7 16.8 7 16.8s-1.2.5-1.2 1.2.5 1.2 1.2 1.2zm11 0c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2.5 1.2 1.2 1.2z" />
            </svg>
            Free Shipping on Orders Above Rs.555
          </span>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v2H6v4h3v7h4v-7h3.3l.7-4h-4V9c0-.7.3-1 1-1z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.5 2h9C19.5 2 22 4.5 22 7.5v9c0 3-2.5 5.5-5.5 5.5h-9C4.5 22 2 19.5 2 16.5v-9C2 4.5 4.5 2 7.5 2zm0 2C5.6 4 4 5.6 4 7.5v9C4 18.4 5.6 20 7.5 20h9c1.9 0 3.5-1.6 3.5-3.5v-9C20 5.6 18.4 4 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-2.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2c-.2-1.1-1.1-1.9-2.1-2.1C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.5.4c-1 .2-1.9 1-2.1 2.1C2 9 2 12 2 12s0 3 .4 4.8c.2 1.1 1.1 1.9 2.1 2.1 1.8.4 7.5.4 7.5.4s5.7 0 7.5-.4c1-.2 1.9-1 2.1-2.1.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.3V8.7l5.7 3.3-5.7 3.3z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.1 2C6.6 2 2.2 6.4 2.2 11.9c0 1.8.5 3.5 1.4 5L2 22l5.3-1.5c1.4.8 3.1 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9S17.6 2 12.1 2zm0 17.8c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3.1.9.9-3-.2-.3c-.8-1.2-1.3-2.7-1.3-4.2C4 7.5 7.6 3.9 12.1 3.9s8 3.6 8 8-3.6 7.9-8 7.9zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
