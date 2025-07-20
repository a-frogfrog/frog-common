interface ModalProps {
    show: boolean;
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}
declare var __VLS_11: {}, __VLS_18: {}, __VLS_20: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_11) => any;
} & {
    body?: (props: typeof __VLS_18) => any;
} & {
    footer?: (props: typeof __VLS_20) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ModalProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
}, string, import("vue").PublicProps, Readonly<ModalProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
