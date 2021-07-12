/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	set_input_value,
	space,
	text
} from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	child_ctx[5] = i;
	return child_ctx;
}

// (18:4) {#if value.length >= 3}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*allPosts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*allPosts, value*/ 3) {
				each_value = /*allPosts*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (21:8) {#if post.fields.articleBody           .toLowerCase()           .includes(value.toLowerCase())}
function create_if_block_1(ctx) {
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div0;
	let h5;
	let a0;
	let t1_value = /*post*/ ctx[3].fields.title + "";
	let t1;
	let a0_href_value;
	let t2;
	let ul;
	let li;
	let i;
	let t3;
	let a1;
	let t4_value = /*post*/ ctx[3].fields.author.name + "";
	let t4;
	let a1_href_value;
	let t5;
	let t6_value = /*post*/ ctx[3].fields.dateCreated + "";
	let t6;
	let t7;

	return {
		c() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h5 = element("h5");
			a0 = element("a");
			t1 = text(t1_value);
			t2 = space();
			ul = element("ul");
			li = element("li");
			i = element("i");
			t3 = space();
			a1 = element("a");
			t4 = text(t4_value);
			t5 = text("\n                  - ");
			t6 = text(t6_value);
			t7 = space();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			a0 = claim_element(h5_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, t1_value);
			a0_nodes.forEach(detach);
			h5_nodes.forEach(detach);
			t2 = claim_space(div0_nodes);
			ul = claim_element(div0_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li = claim_element(ul_nodes, "LI", { class: true });
			var li_nodes = children(li);
			i = claim_element(li_nodes, "I", { class: true });
			children(i).forEach(detach);
			t3 = claim_space(li_nodes);
			a1 = claim_element(li_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, t4_value);
			a1_nodes.forEach(detach);
			t5 = claim_text(li_nodes, "\n                  - ");
			t6 = claim_text(li_nodes, t6_value);
			li_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t7 = claim_space(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img, "class", "inline-block object-cover rounded-full w-16 h-16");
			if (img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[3].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[3].fields.image.alt);
			attr(a0, "href", a0_href_value = /*post*/ ctx[3].path);
			attr(h5, "class", "header my-0");
			attr(i, "class", "las la-user-astronaut text-base relative");
			attr(a1, "href", a1_href_value = /*post*/ ctx[3].fields.author.url);
			attr(li, "class", "");
			attr(ul, "class", "text-meta");
			attr(div0, "class", "inline-block ml-2");
			attr(div1, "class", "flex items-center mb-5");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, img);
			append(div1, t0);
			append(div1, div0);
			append(div0, h5);
			append(h5, a0);
			append(a0, t1);
			append(div0, t2);
			append(div0, ul);
			append(ul, li);
			append(li, i);
			append(li, t3);
			append(li, a1);
			append(a1, t4);
			append(li, t5);
			append(li, t6);
			append(div1, t7);
		},
		p(ctx, dirty) {
			if (dirty & /*allPosts*/ 1 && img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[3].fields.image.src)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*allPosts*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[3].fields.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty & /*allPosts*/ 1 && t1_value !== (t1_value = /*post*/ ctx[3].fields.title + "")) set_data(t1, t1_value);

			if (dirty & /*allPosts*/ 1 && a0_href_value !== (a0_href_value = /*post*/ ctx[3].path)) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*allPosts*/ 1 && t4_value !== (t4_value = /*post*/ ctx[3].fields.author.name + "")) set_data(t4, t4_value);

			if (dirty & /*allPosts*/ 1 && a1_href_value !== (a1_href_value = /*post*/ ctx[3].fields.author.url)) {
				attr(a1, "href", a1_href_value);
			}

			if (dirty & /*allPosts*/ 1 && t6_value !== (t6_value = /*post*/ ctx[3].fields.dateCreated + "")) set_data(t6, t6_value);
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

// (20:6) {#each allPosts as post, i}
function create_each_block(ctx) {
	let show_if = /*post*/ ctx[3].fields.articleBody.toLowerCase().includes(/*value*/ ctx[1].toLowerCase());
	let if_block_anchor;
	let if_block = show_if && create_if_block_1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*allPosts, value*/ 3) show_if = /*post*/ ctx[3].fields.articleBody.toLowerCase().includes(/*value*/ ctx[1].toLowerCase());

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let h4;
	let span0;
	let t0;
	let t1;
	let span1;
	let input;
	let t2;
	let div0;
	let mounted;
	let dispose;
	let if_block = /*value*/ ctx[1].length >= 3 && create_if_block(ctx);

	return {
		c() {
			div1 = element("div");
			h4 = element("h4");
			span0 = element("span");
			t0 = text("Search");
			t1 = space();
			span1 = element("span");
			input = element("input");
			t2 = space();
			div0 = element("div");
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h4 = claim_element(div1_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			span0 = claim_element(h4_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Search");
			span0_nodes.forEach(detach);
			h4_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			span1 = claim_element(div1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			input = claim_element(span1_nodes, "INPUT", { class: true, id: true, placeholder: true });
			span1_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h4, "class", "header mt-0");
			attr(input, "class", "appearance-none block w-full bg-gray-100 border border-gray-400 mb-5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white");
			attr(input, "id", "search");
			attr(input, "placeholder", "Search articles...");
			attr(span1, "class", "flex flex-wrap items-center");
			attr(div0, "class", "row");
			attr(div1, "class", "row");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, h4);
			append(h4, span0);
			append(span0, t0);
			append(div1, t1);
			append(div1, span1);
			append(span1, input);
			set_input_value(input, /*value*/ ctx[1]);
			append(div1, t2);
			append(div1, div0);
			if (if_block) if_block.m(div0, null);

			if (!mounted) {
				dispose = listen(input, "input", /*input_input_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*value*/ 2 && input.value !== /*value*/ ctx[1]) {
				set_input_value(input, /*value*/ ctx[1]);
			}

			if (/*value*/ ctx[1].length >= 3) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allPosts } = $$props;
	let value = "";

	function input_input_handler() {
		value = this.value;
		$$invalidate(1, value);
	}

	$$self.$$set = $$props => {
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
	};

	return [allPosts, value, input_input_handler];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { allPosts: 0 });
	}
}

export default Component;