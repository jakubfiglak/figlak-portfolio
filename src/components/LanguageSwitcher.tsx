import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

export const LanguageSwitcher = () => {
  const { originalPath, language } = useI18next();

  return (
    <div>
      <Link to={originalPath} language={language === 'pl' ? 'en' : 'pl'}>
        {language === 'pl' ? 'English' : 'Polski'}
      </Link>
    </div>
  );
};
