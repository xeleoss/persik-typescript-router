import React from 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
        // добавляем атриббуты, которых не хватает в типах VKUI
        size?: string,
        level?: string
    }
}
