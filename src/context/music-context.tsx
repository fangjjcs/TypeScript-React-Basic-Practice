import { createContext, FC, useState } from "react";

import MusicModel from "../models/MusicModel";

type MusicContextObj = {
    musicList: MusicModel[],
    addMusic: (text: string) => void
}

export const MusicContext = createContext<MusicContextObj>({
    musicList: [],
    addMusic: (text: string) => {}
});

const MusicContextProvider: FC<{children: any}> = (props) => {

    const [items, setItems] = useState<MusicModel[]>([
        new MusicModel('Krystal'), 
        new MusicModel('Rom-Com Gone Wrong')
      ]);
    
      const onAddMusicHandler = (newMusic: string) => {
        setItems( prev => [
          ...prev,
          new MusicModel(newMusic)
        ])
      }
    const contextValue: MusicContextObj = {
        musicList: items,
        addMusic: onAddMusicHandler
    }
    return (
    <MusicContext.Provider value={contextValue}>
        {props.children}
    </MusicContext.Provider>
    )
}

export default MusicContextProvider;