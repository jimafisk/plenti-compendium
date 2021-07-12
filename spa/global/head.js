/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

function create_if_block_2(ctx) {
	let script;
	let script_src_value;

	return {
		c() {
			script = element("script");
			this.h();
		},
		l(nodes) {
			script = claim_element(nodes, "SCRIPT", { src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (script.src !== (script_src_value = "assets/smtp.js")) attr(script, "src", script_src_value);
		},
		m(target, anchor) {
			insert(target, script, anchor);
		},
		d(detaching) {
			if (detaching) detach(script);
		}
	};
}

// (37:2) {#if idxContent.theme.codeHighlighting}
function create_if_block_1(ctx) {
	let link;

	return {
		c() {
			link = element("link");
			this.h();
		},
		l(nodes) {
			link = claim_element(nodes, "LINK", { rel: true, href: true });
			this.h();
		},
		h() {
			attr(link, "rel", "stylesheet");
			attr(link, "href", "assets/prism.css");
		},
		m(target, anchor) {
			insert(target, link, anchor);
		},
		d(detaching) {
			if (detaching) detach(link);
		}
	};
}

// (41:2) {#if idxContent.theme.mathTypesetting}
function create_if_block(ctx) {
	let link;

	return {
		c() {
			link = element("link");
			this.h();
		},
		l(nodes) {
			link = claim_element(nodes, "LINK", { rel: true, href: true });
			this.h();
		},
		h() {
			attr(link, "rel", "stylesheet");
			attr(link, "href", "assets/katex.min.css");
		},
		m(target, anchor) {
			insert(target, link, anchor);
		},
		d(detaching) {
			if (detaching) detach(link);
		}
	};
}

function create_fragment(ctx) {
	let head;
	let meta0;
	let t0;
	let meta1;
	let t1;
	let meta2;
	let meta2_content_value;
	let t2;
	let meta3;
	let t3;
	let meta4;
	let meta4_content_value;
	let t4;
	let meta5;
	let meta5_content_value;
	let t5;
	let meta6;
	let t6;
	let meta7;
	let meta7_content_value;
	let t7;
	let meta8;
	let meta8_content_value;
	let t8;
	let title;
	let t9_value = /*idxContent*/ ctx[0].title + "";
	let t9;
	let t10;
	let base_1;
	let t11;
	let script;
	let script_src_value;
	let t12;
	let link0;
	let t13;
	let link1;
	let t14;
	let t15;
	let t16;
	let t17;
	let link2;
	let if_block0 = /*enabledContact*/ ctx[2] && create_if_block_2(ctx);
	let if_block1 = /*idxContent*/ ctx[0].theme.codeHighlighting && create_if_block_1(ctx);
	let if_block2 = /*idxContent*/ ctx[0].theme.mathTypesetting && create_if_block(ctx);

	return {
		c() {
			head = element("head");
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			meta2 = element("meta");
			t2 = space();
			meta3 = element("meta");
			t3 = space();
			meta4 = element("meta");
			t4 = space();
			meta5 = element("meta");
			t5 = space();
			meta6 = element("meta");
			t6 = space();
			meta7 = element("meta");
			t7 = space();
			meta8 = element("meta");
			t8 = space();
			title = element("title");
			t9 = text(t9_value);
			t10 = space();
			base_1 = element("base");
			t11 = space();
			script = element("script");
			t12 = space();
			link0 = element("link");
			t13 = space();
			link1 = element("link");
			t14 = space();
			if (if_block0) if_block0.c();
			t15 = space();
			if (if_block1) if_block1.c();
			t16 = space();
			if (if_block2) if_block2.c();
			t17 = space();
			link2 = element("link");
			this.h();
		},
		l(nodes) {
			head = claim_element(nodes, "HEAD", {});
			var head_nodes = children(head);
			meta0 = claim_element(head_nodes, "META", { charset: true });
			t0 = claim_space(head_nodes);
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			t1 = claim_space(head_nodes);
			meta2 = claim_element(head_nodes, "META", { name: true, content: true });
			t2 = claim_space(head_nodes);
			meta3 = claim_element(head_nodes, "META", { property: true, content: true });
			t3 = claim_space(head_nodes);
			meta4 = claim_element(head_nodes, "META", { property: true, content: true });
			t4 = claim_space(head_nodes);
			meta5 = claim_element(head_nodes, "META", { property: true, content: true });
			t5 = claim_space(head_nodes);
			meta6 = claim_element(head_nodes, "META", { name: true, content: true });
			t6 = claim_space(head_nodes);
			meta7 = claim_element(head_nodes, "META", { name: true, content: true });
			t7 = claim_space(head_nodes);
			meta8 = claim_element(head_nodes, "META", { name: true, content: true });
			t8 = claim_space(head_nodes);
			title = claim_element(head_nodes, "TITLE", {});
			var title_nodes = children(title);
			t9 = claim_text(title_nodes, t9_value);
			title_nodes.forEach(detach);
			t10 = claim_space(head_nodes);
			base_1 = claim_element(head_nodes, "BASE", { href: true });
			t11 = claim_space(head_nodes);
			script = claim_element(head_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach);
			t12 = claim_space(head_nodes);
			link0 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			t13 = claim_space(head_nodes);
			link1 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t14 = claim_space(head_nodes);
			if (if_block0) if_block0.l(head_nodes);
			t15 = claim_space(head_nodes);
			if (if_block1) if_block1.l(head_nodes);
			t16 = claim_space(head_nodes);
			if (if_block2) if_block2.l(head_nodes);
			t17 = claim_space(head_nodes);
			link2 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(meta0, "charset", "utf-8");
			attr(meta1, "name", "viewport");
			attr(meta1, "content", "width=device-width,initial-scale=1");
			attr(meta2, "name", "description");
			attr(meta2, "content", meta2_content_value = /*idxContent*/ ctx[0].description);
			attr(meta3, "property", "og:type");
			attr(meta3, "content", "website");
			attr(meta4, "property", "og:title");
			attr(meta4, "content", meta4_content_value = /*idxContent*/ ctx[0].title);
			attr(meta5, "property", "og:description");
			attr(meta5, "content", meta5_content_value = /*idxContent*/ ctx[0].description);
			attr(meta6, "name", "twitter:card");
			attr(meta6, "content", "summary");
			attr(meta7, "name", "twitter:title");
			attr(meta7, "content", meta7_content_value = /*idxContent*/ ctx[0].title);
			attr(meta8, "name", "twitter:description");
			attr(meta8, "content", meta8_content_value = /*idxContent*/ ctx[0].description);
			attr(base_1, "href", /*base*/ ctx[1]);
			attr(script, "type", "module");
			if (script.src !== (script_src_value = "/spa/ejected/main.js")) attr(script, "src", script_src_value);
			attr(link0, "rel", "icon");
			attr(link0, "type", "image/svg+xml");
			attr(link0, "href", "assets/logo.svg");
			attr(link1, "rel", "stylesheet");
			attr(link1, "href", "assets/tailwind.global.css");
			attr(link2, "rel", "stylesheet");
			attr(link2, "href", "spa/bundle.css");
		},
		m(target, anchor) {
			insert(target, head, anchor);
			append(head, meta0);
			append(head, t0);
			append(head, meta1);
			append(head, t1);
			append(head, meta2);
			append(head, t2);
			append(head, meta3);
			append(head, t3);
			append(head, meta4);
			append(head, t4);
			append(head, meta5);
			append(head, t5);
			append(head, meta6);
			append(head, t6);
			append(head, meta7);
			append(head, t7);
			append(head, meta8);
			append(head, t8);
			append(head, title);
			append(title, t9);
			append(head, t10);
			append(head, base_1);
			append(head, t11);
			append(head, script);
			append(head, t12);
			append(head, link0);
			append(head, t13);
			append(head, link1);
			append(head, t14);
			if (if_block0) if_block0.m(head, null);
			append(head, t15);
			if (if_block1) if_block1.m(head, null);
			append(head, t16);
			if (if_block2) if_block2.m(head, null);
			append(head, t17);
			append(head, link2);
		},
		p(ctx, [dirty]) {
			if (dirty & /*idxContent*/ 1 && meta2_content_value !== (meta2_content_value = /*idxContent*/ ctx[0].description)) {
				attr(meta2, "content", meta2_content_value);
			}

			if (dirty & /*idxContent*/ 1 && meta4_content_value !== (meta4_content_value = /*idxContent*/ ctx[0].title)) {
				attr(meta4, "content", meta4_content_value);
			}

			if (dirty & /*idxContent*/ 1 && meta5_content_value !== (meta5_content_value = /*idxContent*/ ctx[0].description)) {
				attr(meta5, "content", meta5_content_value);
			}

			if (dirty & /*idxContent*/ 1 && meta7_content_value !== (meta7_content_value = /*idxContent*/ ctx[0].title)) {
				attr(meta7, "content", meta7_content_value);
			}

			if (dirty & /*idxContent*/ 1 && meta8_content_value !== (meta8_content_value = /*idxContent*/ ctx[0].description)) {
				attr(meta8, "content", meta8_content_value);
			}

			if (dirty & /*idxContent*/ 1 && t9_value !== (t9_value = /*idxContent*/ ctx[0].title + "")) set_data(t9, t9_value);

			if (/*idxContent*/ ctx[0].theme.codeHighlighting) {
				if (if_block1) {
					
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(head, t16);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*idxContent*/ ctx[0].theme.mathTypesetting) {
				if (if_block2) {
					
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(head, t17);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(head);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { idxContent } = $$props, { allPages } = $$props, { env } = $$props;
	let base = env.local ? "/" : env.baseurl;
	let enabledContact = allPages.filter(key => key.fields.menu === "Contact")[0].fields.enabled;

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(0, idxContent = $$props.idxContent);
		if ("allPages" in $$props) $$invalidate(3, allPages = $$props.allPages);
		if ("env" in $$props) $$invalidate(4, env = $$props.env);
	};

	return [idxContent, base, enabledContact, allPages, env];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { idxContent: 0, allPages: 3, env: 4 });
	}
}

export default Component;