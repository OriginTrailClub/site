import * as React from 'react';

export function useMediaQuery(mediaQuery: string) {
    const supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';

    const [matchesMediaQuery, setMatchesMediaQuery] = React.useState(
        (supportsMatchMedia) ? 
            window.matchMedia(mediaQuery).matches :
            false            
    );

    React.useEffect(() => {
        if (!supportsMatchMedia) {
            return;
        }
        
        const mq = window.matchMedia(mediaQuery);

        let onChange = (evt: MediaQueryListEvent) => {
            setMatchesMediaQuery(evt.matches);
        };
      
        mq.addEventListener('change', onChange);
        return () => {
          mq.removeEventListener('change', onChange);
        };    
    }, [mediaQuery, supportsMatchMedia])

    return matchesMediaQuery;
};
