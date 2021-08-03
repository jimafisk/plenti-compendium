/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_bidirectional_transition,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	run_all,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import { fade } from '../web_modules/svelte/transition/index.mjs';
import Hoverable from './hoverable.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (86:25) {#if i < post.fields.categories.length - 1}
function create_if_block_2(ctx) {
	let t;

	return {
		c() {
			t = text(",\n                  ");
		},
		l(nodes) {
			t = claim_text(nodes, ",\n                  ");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (84:14) {#each post.fields.categories as catg, i}
function create_each_block_2(ctx) {
	let a;
	let t_value = /*catg*/ ctx[12] + "";
	let t;
	let a_href_value;
	let if_block = /*i*/ ctx[8] < /*post*/ ctx[6].fields.categories.length - 1 && create_if_block_2(ctx);

	return {
		c() {
			a = element("a");
			t = text(t_value);
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			if (if_block) if_block.l(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = "catgs/" + /*catg*/ ctx[12]);
			attr(a, "class", "ml-1 svelte-s3q040");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
			if (if_block) if_block.m(a, null);
		},
		p(ctx, dirty) {
			if (dirty & /*allFeatures*/ 1 && t_value !== (t_value = /*catg*/ ctx[12] + "")) set_data(t, t_value);

			if (/*i*/ ctx[8] < /*post*/ ctx[6].fields.categories.length - 1) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(a, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*allFeatures*/ 1 && a_href_value !== (a_href_value = "catgs/" + /*catg*/ ctx[12])) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block) if_block.d();
		}
	};
}

// (95:24) {#if i < post.fields.tags.length - 1}
function create_if_block_1(ctx) {
	let t;

	return {
		c() {
			t = text(", ");
		},
		l(nodes) {
			t = claim_text(nodes, ", ");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (93:14) {#each post.fields.tags as tag, i}
function create_each_block_1(ctx) {
	let a;
	let t_value = /*tag*/ ctx[10] + "";
	let t;
	let a_href_value;
	let if_block = /*i*/ ctx[8] < /*post*/ ctx[6].fields.tags.length - 1 && create_if_block_1(ctx);

	return {
		c() {
			a = element("a");
			t = text(t_value);
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			if (if_block) if_block.l(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = "tags/" + /*tag*/ ctx[10]);
			attr(a, "class", "ml-1 svelte-s3q040");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
			if (if_block) if_block.m(a, null);
		},
		p(ctx, dirty) {
			if (dirty & /*allFeatures*/ 1 && t_value !== (t_value = /*tag*/ ctx[10] + "")) set_data(t, t_value);

			if (/*i*/ ctx[8] < /*post*/ ctx[6].fields.tags.length - 1) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(a, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*allFeatures*/ 1 && a_href_value !== (a_href_value = "tags/" + /*tag*/ ctx[10])) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block) if_block.d();
		}
	};
}

// (122:6) {#if featuredPage == "Bleed"}
function create_if_block(ctx) {
	let button;
	let hoverable;
	let current;
	let mounted;
	let dispose;

	hoverable = new Hoverable({
			props: {
				$$slots: {
					default: [
						create_default_slot,
						({ hovering }) => ({ 9: hovering }),
						({ hovering }) => hovering ? 512 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			button = element("button");
			create_component(hoverable.$$.fragment);
			this.h();
		},
		l(nodes) {
			button = claim_element(nodes, "BUTTON", { type: true, class: true, style: true });
			var button_nodes = children(button);
			claim_component(hoverable.$$.fragment, button_nodes);
			button_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(button, "type", "button");
			attr(button, "class", "absolute");
			set_style(button, "bottom", "5%");
			set_style(button, "left", "50%");
			set_style(button, "transform", "translate(-50%)");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			mount_component(hoverable, button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", scrollDown);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const hoverable_changes = {};

			if (dirty & /*$$scope, hovering*/ 16896) {
				hoverable_changes.$$scope = { dirty, ctx };
			}

			hoverable.$set(hoverable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(hoverable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(hoverable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			destroy_component(hoverable);
			mounted = false;
			dispose();
		}
	};
}

// (129:10) <Hoverable let:hovering>
function create_default_slot(ctx) {
	let span;
	let i;
	let span_class_value;

	return {
		c() {
			span = element("span");
			i = element("i");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			i = claim_element(span_nodes, "I", { class: true });
			children(i).forEach(detach);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i, "class", "accent las la-chevron-circle-down text-5xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100");
			attr(span, "class", span_class_value = "inline-block " + (/*hovering*/ ctx[9] ? "animate-bounce" : ""));
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, i);
		},
		p(ctx, dirty) {
			if (dirty & /*hovering*/ 512 && span_class_value !== (span_class_value = "inline-block " + (/*hovering*/ ctx[9] ? "animate-bounce" : ""))) {
				attr(span, "class", span_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (40:2) {#each allFeatures as post, i}
function create_each_block(ctx) {
	let div5;
	let div0;
	let img;
	let img_class_value;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div4;
	let div1;
	let t1;
	let div2;
	let h2;
	let a0;
	let t2_value = /*post*/ ctx[6].fields.title + "";
	let t2;
	let a0_href_value;
	let t3;
	let ul;
	let li0;
	let i0;
	let t4;
	let a1;
	let t5_value = /*post*/ ctx[6].fields.author.name + "";
	let t5;
	let a1_href_value;
	let t6;
	let li1;
	let t7;
	let t8_value = /*post*/ ctx[6].fields.dateCreated + "";
	let t8;
	let t9;
	let li2;
	let t10;
	let t11;
	let li3;
	let t12;
	let ul_class_value;
	let t13;
	let div3;
	let t14;
	let button0;
	let i1;
	let t15;
	let i2;
	let t16;
	let button1;
	let i3;
	let t17;
	let t18;
	let div5_id_value;
	let div5_class_value;
	let current;
	let mounted;
	let dispose;
	let each_value_2 = /*post*/ ctx[6].fields.categories;
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = /*post*/ ctx[6].fields.tags;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let if_block = /*featuredPage*/ ctx[1] == "Bleed" && create_if_block(ctx);

	return {
		c() {
			div5 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div4 = element("div");
			div1 = element("div");
			t1 = space();
			div2 = element("div");
			h2 = element("h2");
			a0 = element("a");
			t2 = text(t2_value);
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			i0 = element("i");
			t4 = space();
			a1 = element("a");
			t5 = text(t5_value);
			t6 = space();
			li1 = element("li");
			t7 = text("Created : ");
			t8 = text(t8_value);
			t9 = space();
			li2 = element("li");
			t10 = text("Categories :\n              ");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t11 = space();
			li3 = element("li");
			t12 = text("Tags :\n              ");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t13 = space();
			div3 = element("div");
			t14 = space();
			button0 = element("button");
			i1 = element("i");
			t15 = space();
			i2 = element("i");
			t16 = space();
			button1 = element("button");
			i3 = element("i");
			t17 = space();
			if (if_block) if_block.c();
			t18 = space();
			this.h();
		},
		l(nodes) {
			div5 = claim_element(nodes, "DIV", { id: true, class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { id: true, class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				class: true,
				style: true,
				src: true,
				alt: true
			});

			div0_nodes.forEach(detach);
			t0 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { id: true, class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			children(div1).forEach(detach);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h2 = claim_element(div2_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			a0 = claim_element(h2_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, t2_value);
			a0_nodes.forEach(detach);
			h2_nodes.forEach(detach);
			t3 = claim_space(div2_nodes);
			ul = claim_element(div2_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			i0 = claim_element(li0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			t4 = claim_space(li0_nodes);
			a1 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t5 = claim_text(a1_nodes, t5_value);
			a1_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t6 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t7 = claim_text(li1_nodes, "Created : ");
			t8 = claim_text(li1_nodes, t8_value);
			li1_nodes.forEach(detach);
			t9 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t10 = claim_text(li2_nodes, "Categories :\n              ");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(li2_nodes);
			}

			li2_nodes.forEach(detach);
			t11 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t12 = claim_text(li3_nodes, "Tags :\n              ");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(li3_nodes);
			}

			li3_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t13 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			children(div3).forEach(detach);
			div4_nodes.forEach(detach);
			t14 = claim_space(div5_nodes);
			button0 = claim_element(div5_nodes, "BUTTON", { class: true, style: true });
			var button0_nodes = children(button0);
			i1 = claim_element(button0_nodes, "I", { class: true });
			children(i1).forEach(detach);
			t15 = claim_space(button0_nodes);
			i2 = claim_element(button0_nodes, "I", { class: true });
			children(i2).forEach(detach);
			button0_nodes.forEach(detach);
			t16 = claim_space(div5_nodes);
			button1 = claim_element(div5_nodes, "BUTTON", { type: true, class: true, style: true });
			var button1_nodes = children(button1);
			i3 = claim_element(button1_nodes, "I", { class: true });
			children(i3).forEach(detach);
			button1_nodes.forEach(detach);
			t17 = claim_space(div5_nodes);
			if (if_block) if_block.l(div5_nodes);
			t18 = claim_space(div5_nodes);
			div5_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img, "class", img_class_value = "w-full " + (/*featuredPage*/ ctx[1] == "Frame"
			? "rounded-lg object-cover h-screen-70"
			: "object-cover h-screen"));

			set_style(img, "filter", "brightness(60%)");
			if (img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[6].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[6].fields.image.alt);
			attr(div0, "id", "featureImage");
			attr(div0, "class", "w-full");
			attr(div1, "class", "col-lg-2");
			attr(a0, "href", a0_href_value = /*post*/ ctx[6].path);
			attr(a0, "class", " svelte-s3q040");
			attr(h2, "class", "w-full text-center pb-3 md:pb-4 lg:pb-5 text-2xl sm:text-3xl md:text-4xl");
			attr(i0, "class", "las la-user-astronaut text-base top-0.5 relative");
			attr(a1, "href", a1_href_value = /*post*/ ctx[6].fields.author.url);
			attr(a1, "class", "svelte-s3q040");
			attr(li0, "class", "px-1");
			attr(li1, "class", "px-1");
			attr(li2, "class", "px-1");
			attr(li3, "class", "px-1");

			attr(ul, "class", ul_class_value = "flex flex-wrap items-center justify-center text-sm " + (/*featuredPage*/ ctx[1] == "Frame"
			? "md:mb-10 sm:mb-5"
			: "mb-24"));

			attr(div2, "class", "col-lg-8");
			attr(div3, "class", "col-lg-2");
			attr(div4, "id", "featureOverlayText");
			attr(div4, "class", "feature w-full absolute row m-0 px-16 svelte-s3q040");
			attr(i1, "class", "");
			attr(i2, "class", "accent las la-chevron-circle-left text-5xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100");
			attr(button0, "class", "absolute m-2 left-2");
			set_style(button0, "top", "50%");
			attr(i3, "class", "accent las la-chevron-circle-right text-5xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100");
			attr(button1, "type", "button");
			attr(button1, "class", "absolute m-2 right-2");
			set_style(button1, "top", "50%");
			attr(div5, "id", div5_id_value = /*i*/ ctx[8]);
			attr(div5, "class", div5_class_value = "w-full relative overflow-hidden \n\t\t  " + (/*featuredPage*/ ctx[1] == "Frame" ? " rounded-lg" : "") + " \n\t\t  " + (/*i*/ ctx[8] == /*featureIdx*/ ctx[2] ? "" : "hidden"));
		},
		m(target, anchor) {
			insert(target, div5, anchor);
			append(div5, div0);
			append(div0, img);
			append(div5, t0);
			append(div5, div4);
			append(div4, div1);
			append(div4, t1);
			append(div4, div2);
			append(div2, h2);
			append(h2, a0);
			append(a0, t2);
			append(div2, t3);
			append(div2, ul);
			append(ul, li0);
			append(li0, i0);
			append(li0, t4);
			append(li0, a1);
			append(a1, t5);
			append(ul, t6);
			append(ul, li1);
			append(li1, t7);
			append(li1, t8);
			append(ul, t9);
			append(ul, li2);
			append(li2, t10);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(li2, null);
			}

			append(ul, t11);
			append(ul, li3);
			append(li3, t12);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(li3, null);
			}

			append(div4, t13);
			append(div4, div3);
			append(div5, t14);
			append(div5, button0);
			append(button0, i1);
			append(button0, t15);
			append(button0, i2);
			append(div5, t16);
			append(div5, button1);
			append(button1, i3);
			append(div5, t17);
			if (if_block) if_block.m(div5, null);
			append(div5, t18);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*clickPrev*/ ctx[3]),
					listen(button1, "click", /*clickNext*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*featuredPage*/ 2 && img_class_value !== (img_class_value = "w-full " + (/*featuredPage*/ ctx[1] == "Frame"
			? "rounded-lg object-cover h-screen-70"
			: "object-cover h-screen"))) {
				attr(img, "class", img_class_value);
			}

			if (!current || dirty & /*allFeatures*/ 1 && img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[6].fields.image.src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*allFeatures*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[6].fields.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*allFeatures*/ 1) && t2_value !== (t2_value = /*post*/ ctx[6].fields.title + "")) set_data(t2, t2_value);

			if (!current || dirty & /*allFeatures*/ 1 && a0_href_value !== (a0_href_value = /*post*/ ctx[6].path)) {
				attr(a0, "href", a0_href_value);
			}

			if ((!current || dirty & /*allFeatures*/ 1) && t5_value !== (t5_value = /*post*/ ctx[6].fields.author.name + "")) set_data(t5, t5_value);

			if (!current || dirty & /*allFeatures*/ 1 && a1_href_value !== (a1_href_value = /*post*/ ctx[6].fields.author.url)) {
				attr(a1, "href", a1_href_value);
			}

			if ((!current || dirty & /*allFeatures*/ 1) && t8_value !== (t8_value = /*post*/ ctx[6].fields.dateCreated + "")) set_data(t8, t8_value);

			if (dirty & /*allFeatures*/ 1) {
				each_value_2 = /*post*/ ctx[6].fields.categories;
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(li2, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if (dirty & /*allFeatures*/ 1) {
				each_value_1 = /*post*/ ctx[6].fields.tags;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(li3, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (!current || dirty & /*featuredPage*/ 2 && ul_class_value !== (ul_class_value = "flex flex-wrap items-center justify-center text-sm " + (/*featuredPage*/ ctx[1] == "Frame"
			? "md:mb-10 sm:mb-5"
			: "mb-24"))) {
				attr(ul, "class", ul_class_value);
			}

			if (/*featuredPage*/ ctx[1] == "Bleed") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*featuredPage*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div5, t18);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty & /*featuredPage, featureIdx*/ 6 && div5_class_value !== (div5_class_value = "w-full relative overflow-hidden \n\t\t  " + (/*featuredPage*/ ctx[1] == "Frame" ? " rounded-lg" : "") + " \n\t\t  " + (/*i*/ ctx[8] == /*featureIdx*/ ctx[2] ? "" : "hidden"))) {
				attr(div5, "class", div5_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div5);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let div_transition;
	let current;
	let each_value = /*allFeatures*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*featuredPage, featureIdx, scrollDown, hovering, clickNext, clickPrev, allFeatures*/ 543) {
				each_value = /*allFeatures*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

function scrollDown() {
	window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
}

function instance($$self, $$props, $$invalidate) {
	let maxFeatures;
	let { allFeatures } = $$props, { featuredPage } = $$props;
	let featureIdx = 0;

	function clickPrev() {
		if (featureIdx == 0) {
			// block of code to be executed if the condition is true
			$$invalidate(2, featureIdx = maxFeatures - 1);
		} else {
			// block of code to be executed if the condition is false
			$$invalidate(2, featureIdx = (featureIdx - 1) % maxFeatures);
		}
	}

	function clickNext() {
		if (featureIdx == maxFeatures) {
			// block of code to be executed if the condition is true
			$$invalidate(2, featureIdx = 0);
		} else {
			// block of code to be executed if the condition is false
			$$invalidate(2, featureIdx = (featureIdx + 1) % maxFeatures);
		}
	}

	$$self.$$set = $$props => {
		if ("allFeatures" in $$props) $$invalidate(0, allFeatures = $$props.allFeatures);
		if ("featuredPage" in $$props) $$invalidate(1, featuredPage = $$props.featuredPage);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*allFeatures*/ 1) {
			$: maxFeatures = allFeatures.length;
		}
	};

	return [allFeatures, featuredPage, featureIdx, clickPrev, clickNext];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { allFeatures: 0, featuredPage: 1 });
	}
}

export default Component;