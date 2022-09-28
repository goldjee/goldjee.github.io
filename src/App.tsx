import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';

import theme from './theme/theme';

const App: FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Summary />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/education" element={<Education />} />
                </Routes>
            </HashRouter>
        </ChakraProvider>
    );
};

export default App;
