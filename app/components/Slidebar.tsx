import React from "react";
import Link from "next/link";
import pic from "../public/logo.svg";
import { getAllNotes } from "../lib/redis";
import SlidebarNoteList from "./SlidebarNoteList";

export default async function Sidebar() {
  const notes = await getAllNotes();
  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src={pic.src}
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          {/* SideSearchField */}
        </section>
        <nav>
          <SlidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  );
}
