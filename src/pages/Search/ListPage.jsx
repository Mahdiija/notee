import React from "react";
import { Link } from "@mui/material";

import {
  BackGroundC,
  Itemcard,
  Dh1card,
  H1card,
  Card1,
  Cardcard,
  Dpcard,
  Pcard,
  Card,
} from "../../styled/listpagestyle";

export default function ListPage({ notes }) {
  console.log(notes);
  return (
    <BackGroundC>
      <Card>
        {notes
          ? notes.map((note) => {
              return (
                <Link underline="none" href={`/edit/${note.noteId}`}>
                  <Cardcard>
                    <Itemcard key={note.noteId}>
                      <Dh1card>
                        <H1card> {note.noteTitle.substring(0, 80)}</H1card>
                      </Dh1card>
                      <Dpcard>
                        <Pcard>{note.noteContent.substring(0, 150)}</Pcard>
                      </Dpcard>
                    </Itemcard>
                  </Cardcard>
                </Link>
              );
            })
          : null}
      </Card>
    </BackGroundC>
  );
}
