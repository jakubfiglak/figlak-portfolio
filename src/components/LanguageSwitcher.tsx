import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

export const LanguageSwitcher = () => {
  const { originalPath, language } = useI18next();

  return (
    <div>
      <Link
        to={originalPath}
        language={language === 'pl' ? 'en' : 'pl'}
        title={`Switch language to ${language === 'pl' ? 'English' : 'Polish'}`}
      >
        {language === 'pl' ? (
          <StaticImage
            src="../images/united-kingdom.png"
            alt="British flag"
            placeholder="blurred"
            layout="fixed"
            width={24}
            height={24}
          />
        ) : (
          <StaticImage
            src="../images/poland.png"
            alt="Polish flag"
            placeholder="blurred"
            layout="fixed"
            width={24}
            height={24}
          />
        )}
      </Link>
    </div>
  );
};
