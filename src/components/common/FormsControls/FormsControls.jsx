
import React from "react";
import css from './FormControls.module.css'

export  const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={ css.formControl + " " + (hasError ? css.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span className={css.alert}> { meta.error } </span> }
      </div>
    );
  };